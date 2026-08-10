import { BaseTransformer } from '@adonisjs/core/transformers'

import type { Medication } from '#core/services/db/schema'

export default class MedicationTransformer extends BaseTransformer<Medication> {
  toObject() {
    return {
      id: this.resource.id,
      name: this.resource.name,
      dosage: this.resource.dosage,
      instructions: this.resource.instructions,
      form: this.resource.form,
      active: this.resource.active,
      createdAt: this.resource.createdAt.toISOString(),
      updatedAt: this.resource.updatedAt.toISOString(),
    }
  }
}
