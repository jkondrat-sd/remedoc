import type { Route } from '@repo/rpc/types'

export type Schedule = Route.Response<'list_schedule'>[number]
