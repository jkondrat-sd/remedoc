import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { tuyau } from '@/lib/client'

export function useAuthQuery() {
  const queryClient = useQueryClient()

  const query = useQuery(authQueryOptions())

  useEffect(() => {
    if (query.error) {
      queryClient.resetQueries({ queryKey: authQueryOptions().queryKey })
    }
  }, [query.error, queryClient])

  return query
}

export function authQueryOptions() {
  return tuyau.showUserInfo.queryOptions(
    {},
    {
      retry: 1,
      staleTime: Infinity,
      gcTime: Infinity,
    }
  )
}
