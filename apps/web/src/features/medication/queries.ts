import { tuyau } from '@/lib/client'

export function listMedicationQueryOptions() {
  return tuyau.listMedication.queryOptions()
}

export function showMedicationQueryOptions(id: number) {
  return tuyau.showMedication.queryOptions({ params: { medicationId: id } })
}
