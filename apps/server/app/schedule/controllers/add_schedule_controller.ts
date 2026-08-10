import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'

import { createMedicationScheduleSchema } from '#core/services/db/validator'
import { validateUsingZod } from '#core/utils'
import { MedicationRepository } from '#medication/repositories/medication_repository'
import { MedicationScheduleRepository } from '#schedule/repositories/medication_schedule_repository'
import MedicationScheduleTransformer from '#schedule/transformers/medication_schedule_transformer'

@inject()
export default class AddScheduleController {
  constructor(
    private medicationRepository: MedicationRepository,
    private medicationScheduleRepository: MedicationScheduleRepository
  ) {}

  async handle({ params, request, response, auth, serialize }: HttpContext) {
    const user = auth.use('api').getUserOrFail()
    const payload = validateUsingZod({
      schema: createMedicationScheduleSchema,
      data: request.all(),
    })

    const medication = await this.medicationRepository.findById(Number(params.medicationId))

    if (!medication || medication?.userId !== user.id) {
      return response.notFound({ message: 'Médicament introuvable' })
    }

    const schedule = await this.medicationScheduleRepository.add({
      ...payload,
      medicationId: medication.id,
    })

    await emitter.emit('setup:user-schedule', { userId: user.id, timeOfDay: schedule.timeOfDay })

    return serialize.withoutWrapping(MedicationScheduleTransformer.transform(schedule))
  }
}
