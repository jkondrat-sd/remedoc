import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

import { client, tuyau, urlFor } from '@/lib/client'
import { handlePopup } from '@/lib/popup'
import { authQueryOptions } from './queries'
import { useAuthTokenStore } from './stores/auth_token_store'

export function useLogoutMutation() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const resetAuthToken = useAuthTokenStore((state) => state.reset)

  return useMutation(
    tuyau.logout.mutationOptions({
      onSuccess: async () => {
        queryClient.resetQueries({ queryKey: authQueryOptions().queryKey })
        navigate({ to: '/' })
        resetAuthToken()
      },
    })
  )
}

export function useLoginMutation() {
  return useMutation({
    mutationFn: async () => {
      const result = await handlePopup<{ code: string; state: string }>(
        urlFor('discord_redirect'),
        'discord-auth',
        { timeout: 180000 }
      )

      if (result.status === 'success') {
        const tokenState = useAuthTokenStore.getState()

        const [data, error] = await client.api
          .discordCallback({
            //@ts-ignore
            query: { code: result.data.code, state: result.data.state },
            credentials: 'include',
          })
          .safe()

        if (!error) {
          tokenState.init(data.token)
          return true
        }
      }

      return false
    },
  })
}
