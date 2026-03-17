import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'show_user_info': { paramsTuple?: []; params?: {} }
    'discord_redirect': { paramsTuple?: []; params?: {} }
    'discord_callback': { paramsTuple?: []; params?: {} }
    'logout': { paramsTuple?: []; params?: {} }
    'list_user_schedule': { paramsTuple: [ParamValue]; params: {'discordId': ParamValue} }
    'list_medication': { paramsTuple?: []; params?: {} }
    'create_medication': { paramsTuple?: []; params?: {} }
    'show_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'update_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'toggle_archive_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'list_schedule': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'add_schedule': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'toggle_active_schedule': { paramsTuple: [ParamValue,ParamValue]; params: {'medicationId': ParamValue,'scheduleId': ParamValue} }
    'delete_schedule': { paramsTuple: [ParamValue,ParamValue]; params: {'medicationId': ParamValue,'scheduleId': ParamValue} }
  }
  GET: {
    'show_user_info': { paramsTuple?: []; params?: {} }
    'discord_redirect': { paramsTuple?: []; params?: {} }
    'discord_callback': { paramsTuple?: []; params?: {} }
    'list_user_schedule': { paramsTuple: [ParamValue]; params: {'discordId': ParamValue} }
    'list_medication': { paramsTuple?: []; params?: {} }
    'show_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'list_schedule': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
  }
  HEAD: {
    'show_user_info': { paramsTuple?: []; params?: {} }
    'discord_redirect': { paramsTuple?: []; params?: {} }
    'discord_callback': { paramsTuple?: []; params?: {} }
    'list_user_schedule': { paramsTuple: [ParamValue]; params: {'discordId': ParamValue} }
    'list_medication': { paramsTuple?: []; params?: {} }
    'show_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'list_schedule': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
  }
  POST: {
    'logout': { paramsTuple?: []; params?: {} }
    'create_medication': { paramsTuple?: []; params?: {} }
    'toggle_archive_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'add_schedule': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
    'toggle_active_schedule': { paramsTuple: [ParamValue,ParamValue]; params: {'medicationId': ParamValue,'scheduleId': ParamValue} }
  }
  PUT: {
    'update_medication': { paramsTuple: [ParamValue]; params: {'medicationId': ParamValue} }
  }
  DELETE: {
    'delete_schedule': { paramsTuple: [ParamValue,ParamValue]; params: {'medicationId': ParamValue,'scheduleId': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}