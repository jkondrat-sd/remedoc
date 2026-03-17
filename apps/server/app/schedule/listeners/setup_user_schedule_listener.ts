import { and, count, eq } from 'drizzle-orm'
import { Settings } from 'luxon'

import { db } from '#core/services/db/main'
import { medications, medicationSchedules } from '#core/services/db/schema'
import MedicationScheduleNotificationJob, {
  type MedicationScheduleNotificationJobPayload,
} from '#jobs/medication_schedule_notification_job'
import { Schedule } from '@adonisjs/queue'

export default class SetupUserScheduleListener {
  async handle(payload: MedicationScheduleNotificationJobPayload) {
    const [result] = await db
      .select({ value: count() })
      .from(medicationSchedules)
      .where(
        and(
          eq(medicationSchedules.active, true),
          eq(medicationSchedules.timeOfDay, payload.timeOfDay)
        )
      )
      .innerJoin(
        medications,
        and(
          eq(medications.id, medicationSchedules.medicationId),
          eq(medications.active, true),
          eq(medications.userId, payload.userId)
        )
      )

    const jobId = MedicationScheduleNotificationJob.makeId(payload)

    if (result.value === 0) {
      const schedule = await Schedule.find(jobId)
      schedule?.delete()
      return
    }

    const [hour, minutes] = payload.timeOfDay.split(':')

    await MedicationScheduleNotificationJob.schedule(payload)
      .id(jobId)
      .cron(`${minutes} ${hour} * * *`)
      .timezone(Settings.defaultZone.name)
  }
}
