import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

import { MedicationRepository } from '#medication/repositories/medication_repository'
import MedicationTransformer from '#medication/transformers/medication_transformer'

@inject()
export default class ListMedicationController {
  constructor(private medicationRepository: MedicationRepository) {}

  async handle({ serialize, auth }: HttpContext) {
    const user = auth.use('api').getUserOrFail()

    const medications = await this.medicationRepository.findAll({ userId: user.id })

    return serialize.withoutWrapping(MedicationTransformer.transform(medications))
  }
}
