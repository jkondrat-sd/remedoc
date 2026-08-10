import { BaseTransformer } from '@adonisjs/core/transformers'

import type { MedicationSchedule } from '#core/services/db/schema'

export default class MedicationScheduleTransformer extends BaseTransformer<MedicationSchedule> {
  toObject() {
    return {
      id: this.resource.id,
      medicationId: this.resource.medicationId,
      timeOfDay: this.resource.timeOfDay,
      daysOfWeek: this.resource.daysOfWeek
        ? this.resource.daysOfWeek.split(',').map((value) => Number.parseInt(value))
        : null,
      active: this.resource.active,
      notes: this.resource.notes,
      createdAt: this.resource.createdAt.toISOString(),
    }
  }
}
