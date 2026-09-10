import { BaseTransformer } from '@adonisjs/core/transformers'

import type { Medication, MedicationSchedule } from '#app/core/services/db/schema'
import MedicationTransformer from '#medication/transformers/medication_transformer'
import MedicationScheduleTransformer from '#schedule/transformers/medication_schedule_transformer'

export default class ListUserScheduleTransformer extends BaseTransformer<{
  schedule: MedicationSchedule
  medication: Medication
}> {
  toObject() {
    return {
      schedule: MedicationScheduleTransformer.transform(this.resource.schedule),
      medication: MedicationTransformer.transform(this.resource.medication),
    }
  }
}
