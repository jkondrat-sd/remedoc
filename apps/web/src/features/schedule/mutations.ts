import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toastManager } from '@/components/ui/toast'
import { tuyau } from '@/lib/client'
import { listMedicationScheculeQueryOptions } from './queries'

export function useAddMedicationScheduleMutation(medicationId: number) {
  const queryClient = useQueryClient()

  return useMutation(
    tuyau.addSchedule.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: listMedicationScheculeQueryOptions(medicationId).queryKey,
        })
        toastManager.add({ type: 'success', description: 'Horaire ajouté !' })
      },
    })
  )
}

export function useToggleActiveScheduleMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    tuyau.toggleActiveSchedule.mutationOptions({
      onMutate: async ({ params }) => {
        const schedulesQueryKey = listMedicationScheculeQueryOptions(
          Number(params.medicationId)
        ).queryKey

        await queryClient.cancelQueries({
          queryKey: schedulesQueryKey,
        })

        const previousSchedules = queryClient.getQueryData(schedulesQueryKey)

        queryClient.setQueryData(schedulesQueryKey, (old: any) => {
          if (!old) return old
          let newValues = old.map((schedule: any) =>
            schedule.id === Number(params.scheduleId)
              ? { ...schedule, active: !schedule.active }
              : schedule
          )

          return newValues
        })

        return { previousSchedules }
      },
      onError: (_error, { params }, context) => {
        queryClient.setQueryData(
          listMedicationScheculeQueryOptions(Number(params.medicationId)).queryKey,
          context?.previousSchedules
        )
        toastManager.add({
          type: 'error',
          description: "Impossible de modifier l'état de l'horaire.",
        })
      },
      onSettled: async (_data, _error, { params }) => {
        await queryClient.invalidateQueries({
          queryKey: listMedicationScheculeQueryOptions(Number(params.medicationId)).queryKey,
        })
      },
    })
  )
}

export function useDeleteScheduleMutation() {
  const queryClient = useQueryClient()

  return useMutation(
    tuyau.deleteSchedule.mutationOptions({
      onMutate: async ({ params }) => {
        const schedulesQueryKey = listMedicationScheculeQueryOptions(
          Number(params.medicationId)
        ).queryKey

        await queryClient.cancelQueries({
          queryKey: schedulesQueryKey,
        })

        const previousSchedules = queryClient.getQueryData(schedulesQueryKey)

        queryClient.setQueryData(schedulesQueryKey, (old: any) => {
          if (!old) return old
          let newValues = old.filter((schedule: any) => schedule.id !== Number(params.scheduleId))

          return newValues
        })

        return { previousSchedules }
      },
      onError: (_error, { params }, context) => {
        queryClient.setQueryData(
          listMedicationScheculeQueryOptions(Number(params.medicationId)).queryKey,
          context?.previousSchedules
        )
        toastManager.add({
          type: 'error',
          description: "Impossible de supprimer l'horaire.",
        })
      },
      onSettled: async (_data, _error, { params }) => {
        await queryClient.invalidateQueries({
          queryKey: listMedicationScheculeQueryOptions(Number(params.medicationId)).queryKey,
        })
      },
    })
  )
}
