import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

import { MedicationRepository } from '#medication/repositories/medication_repository'
import MedicationTransformer from '#medication/transformers/medication_transformer'

@inject()
export default class ShowMedicationController {
  constructor(private medicationRepository: MedicationRepository) {}

  async handle({ auth, response, params, serialize }: HttpContext) {
    const user = auth.use('api').getUserOrFail()

    const medication = await this.medicationRepository.findById(params.medicationId)

    if (!medication || medication?.userId !== user.id) {
      return response.notFound({ message: 'Médicament introuvable' })
    }

    return serialize.withoutWrapping(MedicationTransformer.transform(medication))
  }
}
