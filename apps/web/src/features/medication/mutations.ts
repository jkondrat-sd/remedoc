import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toastManager } from '@/components/ui/toast'
import { tuyau } from '@/lib/client'
import { listMedicationQueryOptions, showMedicationQueryOptions } from './queries'

export function useCreateMedicationMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    tuyau.createMedication.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: listMedicationQueryOptions().queryKey })

        toastManager.add({ type: 'success', description: 'Medicament ajouté !' })
      },
    })
  )
}

export function useToggleArchiveMedicationMutation(currentlyActive: boolean) {
  const queryClient = useQueryClient()

  return useMutation(
    tuyau.toggleArchiveMedication.mutationOptions({
      onSuccess: async (_, { params }) => {
        await queryClient.invalidateQueries({ queryKey: listMedicationQueryOptions().queryKey })
        await queryClient.invalidateQueries({
          queryKey: showMedicationQueryOptions(Number(params.medicationId)).queryKey,
        })

        toastManager.add({
          type: 'success',
          description: currentlyActive ? 'Medicament archivé !' : 'Medicament restauré !',
        })
      },
    })
  )
}

export function useUpdateMedicationMutation(id: number) {
  const queryClient = useQueryClient()

  return useMutation(
    tuyau.updateMedication.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: listMedicationQueryOptions().queryKey })
        await queryClient.invalidateQueries({ queryKey: showMedicationQueryOptions(id).queryKey })

        toastManager.add({ type: 'success', description: 'Medicament modifié !' })
      },
    })
  )
}
