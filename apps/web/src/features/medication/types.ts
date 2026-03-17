import type { Route } from '@repo/rpc/types'

export type Medication = Route.Response<'list_medication'>[number]
