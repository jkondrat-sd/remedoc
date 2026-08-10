import type { HttpContext } from '@adonisjs/core/http'
import { and, eq } from 'drizzle-orm'

import { db } from '#core/services/db/main'
import { medications, medicationSchedules, users } from '#core/services/db/schema'
import MedicationTransformer from '#medication/transformers/medication_transformer'
import MedicationScheduleTransformer from '#schedule/transformers/medication_schedule_transformer'

export default class ListUserScheduleController {
  async handle({ response, params, serialize }: HttpContext) {
    const [user] = await db
      .select({ id: users.id, discordId: users.discordId })
      .from(users)
      .where(eq(users.discordId, params.discordId))
      .limit(1)

    if (!user) {
      return response.notFound({ message: 'Utilisateur introuvable' })
    }

    let result = await db
      .select({
        schedule: medicationSchedules,
        medication: medications,
      })
      .from(medicationSchedules)
      .where(eq(medicationSchedules.active, true))
      .innerJoin(
        medications,
        and(
          eq(medications.id, medicationSchedules.medicationId),
          eq(medications.active, true),
          eq(medications.userId, user.id)
        )
      )

    return serialize.withoutWrapping(
      result.map((item) => ({
        schedule: MedicationScheduleTransformer.transform(item.schedule),
        medication: MedicationTransformer.transform(item.medication),
      }))
    )
  }
}
