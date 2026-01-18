import { Job } from '@boringnode/queue'
import type { JobOptions } from '@boringnode/queue/types'
import { type APIChannel, Routes } from 'discord-api-types/v10'
import { and, eq } from 'drizzle-orm'
import { DateTime } from 'luxon'

import { db } from '#core/services/db/main'
import { medications, medicationSchedules, users } from '#core/services/db/schema'
import { discord } from '#discord/services/main'
import { MedicationScheduleComponent } from '@repo/discord/components'

export type MedicationScheduleNotificationData = {
  userId: number
  timeOfDay: string
}

export default class MedicationScheduleNotificationJob extends Job<MedicationScheduleNotificationData> {
  static options: JobOptions = {
    queue: 'default',
  }

  static makeId(options: MedicationScheduleNotificationData) {
    return `medication-schedule,user(${options.userId}),hour(${options.timeOfDay})`
  }

  async execute() {
    const [user] = await db.select().from(users).where(eq(users.id, this.payload.userId)).limit(1)

    if (!user) {
      return
    }

    let result = await db
      .select({
        schedule: medicationSchedules,
        medication: medications,
      })
      .from(medicationSchedules)
      .where(
        and(
          eq(medicationSchedules.timeOfDay, this.payload.timeOfDay),
          eq(medicationSchedules.active, true)
        )
      )
      .innerJoin(
        medications,
        and(
          eq(medications.id, medicationSchedules.medicationId),
          eq(medications.active, true),
          eq(medications.userId, this.payload.userId)
        )
      )

    const weekday = DateTime.now().weekday

    result = result.filter((item) => {
      const days = item.schedule.daysOfWeek?.split(',').map((day) => Number.parseInt(day)) || []
      return days.length === 0 || days.includes(weekday)
    })

    if (result.length === 0) {
      return
    }

    const component = MedicationScheduleComponent.build({
      data: result,
      timeOfDay: this.payload.timeOfDay,
    })

    const channel = (await discord.post(Routes.userChannels(), {
      body: { recipient_id: user.discordId },
    })) as APIChannel

    await discord.post(Routes.channelMessages(channel.id), { body: component.render() })

    return
  }
}
