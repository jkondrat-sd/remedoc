import { tuyau } from '@/lib/client'

export function listMedicationScheculeQueryOptions(medicationId: number) {
  return tuyau.listSchedule.queryOptions({ params: { medicationId } })
}
