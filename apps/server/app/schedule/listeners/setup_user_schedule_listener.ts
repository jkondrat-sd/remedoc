import { Schedule } from '@boringnode/queue'
import { and, count, eq } from 'drizzle-orm'
import { Settings } from 'luxon'

import { db } from '#core/services/db/main'
import { medications, medicationSchedules } from '#core/services/db/schema'
import MedicationScheduleNotification, {
  type MedicationScheduleNotificationData,
} from '#jobs/medication_schedule_notification_job'

export default class SetupUserScheduleListener {
  async handle(options: MedicationScheduleNotificationData) {
    const [result] = await db
      .select({ value: count() })
      .from(medicationSchedules)
      .where(
        and(
          eq(medicationSchedules.active, true),
          eq(medicationSchedules.timeOfDay, options.timeOfDay)
        )
      )
      .innerJoin(
        medications,
        and(
          eq(medications.id, medicationSchedules.medicationId),
          eq(medications.active, true),
          eq(medications.userId, options.userId)
        )
      )

    const jobId = MedicationScheduleNotification.makeId(options)

    if (result.value === 0) {
      const schedule = await Schedule.find(jobId)
      await schedule?.delete()
      return
    }

    const [hour, minutes] = options.timeOfDay.split(':')

    await MedicationScheduleNotification.schedule(options)
      .cron(`${minutes} ${hour} * * *`)
      .id(jobId)
      .timezone(Settings.defaultLocale)
  }
}
