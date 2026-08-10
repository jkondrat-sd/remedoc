/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'show_user_info': {
    methods: ["GET","HEAD"],
    pattern: '/api/auth/me',
    tokens: [{"old":"/api/auth/me","type":0,"val":"api","end":""},{"old":"/api/auth/me","type":0,"val":"auth","end":""},{"old":"/api/auth/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['show_user_info']['types'],
  },
  'discord_redirect': {
    methods: ["GET","HEAD"],
    pattern: '/api/auth/redirect',
    tokens: [{"old":"/api/auth/redirect","type":0,"val":"api","end":""},{"old":"/api/auth/redirect","type":0,"val":"auth","end":""},{"old":"/api/auth/redirect","type":0,"val":"redirect","end":""}],
    types: placeholder as Registry['discord_redirect']['types'],
  },
  'discord_callback': {
    methods: ["GET","HEAD"],
    pattern: '/api/auth/callback',
    tokens: [{"old":"/api/auth/callback","type":0,"val":"api","end":""},{"old":"/api/auth/callback","type":0,"val":"auth","end":""},{"old":"/api/auth/callback","type":0,"val":"callback","end":""}],
    types: placeholder as Registry['discord_callback']['types'],
  },
  'logout': {
    methods: ["POST"],
    pattern: '/api/auth/logout',
    tokens: [{"old":"/api/auth/logout","type":0,"val":"api","end":""},{"old":"/api/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['logout']['types'],
  },
  'list_user_schedule': {
    methods: ["GET","HEAD"],
    pattern: '/api/discord/:discordId/schedules',
    tokens: [{"old":"/api/discord/:discordId/schedules","type":0,"val":"api","end":""},{"old":"/api/discord/:discordId/schedules","type":0,"val":"discord","end":""},{"old":"/api/discord/:discordId/schedules","type":1,"val":"discordId","end":""},{"old":"/api/discord/:discordId/schedules","type":0,"val":"schedules","end":""}],
    types: placeholder as Registry['list_user_schedule']['types'],
  },
  'list_medication': {
    methods: ["GET","HEAD"],
    pattern: '/api/medications',
    tokens: [{"old":"/api/medications","type":0,"val":"api","end":""},{"old":"/api/medications","type":0,"val":"medications","end":""}],
    types: placeholder as Registry['list_medication']['types'],
  },
  'create_medication': {
    methods: ["POST"],
    pattern: '/api/medications',
    tokens: [{"old":"/api/medications","type":0,"val":"api","end":""},{"old":"/api/medications","type":0,"val":"medications","end":""}],
    types: placeholder as Registry['create_medication']['types'],
  },
  'show_medication': {
    methods: ["GET","HEAD"],
    pattern: '/api/medications/:medicationId',
    tokens: [{"old":"/api/medications/:medicationId","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId","type":1,"val":"medicationId","end":""}],
    types: placeholder as Registry['show_medication']['types'],
  },
  'update_medication': {
    methods: ["PUT"],
    pattern: '/api/medications/:medicationId',
    tokens: [{"old":"/api/medications/:medicationId","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId","type":1,"val":"medicationId","end":""}],
    types: placeholder as Registry['update_medication']['types'],
  },
  'toggle_archive_medication': {
    methods: ["POST"],
    pattern: '/api/medications/:medicationId/archive',
    tokens: [{"old":"/api/medications/:medicationId/archive","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId/archive","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId/archive","type":1,"val":"medicationId","end":""},{"old":"/api/medications/:medicationId/archive","type":0,"val":"archive","end":""}],
    types: placeholder as Registry['toggle_archive_medication']['types'],
  },
  'list_schedule': {
    methods: ["GET","HEAD"],
    pattern: '/api/medications/:medicationId/schedules',
    tokens: [{"old":"/api/medications/:medicationId/schedules","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId/schedules","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId/schedules","type":1,"val":"medicationId","end":""},{"old":"/api/medications/:medicationId/schedules","type":0,"val":"schedules","end":""}],
    types: placeholder as Registry['list_schedule']['types'],
  },
  'add_schedule': {
    methods: ["POST"],
    pattern: '/api/medications/:medicationId/schedules',
    tokens: [{"old":"/api/medications/:medicationId/schedules","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId/schedules","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId/schedules","type":1,"val":"medicationId","end":""},{"old":"/api/medications/:medicationId/schedules","type":0,"val":"schedules","end":""}],
    types: placeholder as Registry['add_schedule']['types'],
  },
  'toggle_active_schedule': {
    methods: ["POST"],
    pattern: '/api/medications/:medicationId/schedules/:scheduleId/archive',
    tokens: [{"old":"/api/medications/:medicationId/schedules/:scheduleId/archive","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId/archive","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId/archive","type":1,"val":"medicationId","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId/archive","type":0,"val":"schedules","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId/archive","type":1,"val":"scheduleId","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId/archive","type":0,"val":"archive","end":""}],
    types: placeholder as Registry['toggle_active_schedule']['types'],
  },
  'delete_schedule': {
    methods: ["DELETE"],
    pattern: '/api/medications/:medicationId/schedules/:scheduleId',
    tokens: [{"old":"/api/medications/:medicationId/schedules/:scheduleId","type":0,"val":"api","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId","type":0,"val":"medications","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId","type":1,"val":"medicationId","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId","type":0,"val":"schedules","end":""},{"old":"/api/medications/:medicationId/schedules/:scheduleId","type":1,"val":"scheduleId","end":""}],
    types: placeholder as Registry['delete_schedule']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
