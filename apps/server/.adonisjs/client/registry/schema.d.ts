/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'show_user_info': {
    methods: ["GET","HEAD"]
    pattern: '/api/auth/me'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/auth/controllers/show_user_info_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/auth/controllers/show_user_info_controller').default['handle']>>>
    }
  }
  'discord_redirect': {
    methods: ["GET","HEAD"]
    pattern: '/api/auth/redirect'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/auth/controllers/discord_redirect_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/auth/controllers/discord_redirect_controller').default['handle']>>>
    }
  }
  'discord_callback': {
    methods: ["GET","HEAD"]
    pattern: '/api/auth/callback'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/auth/controllers/discord_callback_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/auth/controllers/discord_callback_controller').default['handle']>>>
    }
  }
  'logout': {
    methods: ["POST"]
    pattern: '/api/auth/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/auth/controllers/logout_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/auth/controllers/logout_controller').default['handle']>>>
    }
  }
  'list_user_schedule': {
    methods: ["GET","HEAD"]
    pattern: '/api/discord/:discordId/schedules'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { discordId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/discord/controllers/list_user_schedule_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/discord/controllers/list_user_schedule_controller').default['handle']>>>
    }
  }
  'list_medication': {
    methods: ["GET","HEAD"]
    pattern: '/api/medications'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/medication/controllers/list_medication_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/medication/controllers/list_medication_controller').default['handle']>>>
    }
  }
  'create_medication': {
    methods: ["POST"]
    pattern: '/api/medications'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/medication/controllers/create_medication_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/medication/controllers/create_medication_controller').default['handle']>>>
    }
  }
  'show_medication': {
    methods: ["GET","HEAD"]
    pattern: '/api/medications/:medicationId'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { medicationId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/medication/controllers/show_medication_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/medication/controllers/show_medication_controller').default['handle']>>>
    }
  }
  'update_medication': {
    methods: ["PUT"]
    pattern: '/api/medications/:medicationId'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { medicationId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/medication/controllers/update_medication_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/medication/controllers/update_medication_controller').default['handle']>>>
    }
  }
  'toggle_archive_medication': {
    methods: ["POST"]
    pattern: '/api/medications/:medicationId/archive'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { medicationId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/medication/controllers/toggle_archive_medication_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/medication/controllers/toggle_archive_medication_controller').default['handle']>>>
    }
  }
  'list_schedule': {
    methods: ["GET","HEAD"]
    pattern: '/api/medications/:medicationId/schedules'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { medicationId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/schedule/controllers/list_schedule_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/schedule/controllers/list_schedule_controller').default['handle']>>>
    }
  }
  'add_schedule': {
    methods: ["POST"]
    pattern: '/api/medications/:medicationId/schedules'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { medicationId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/schedule/controllers/add_schedule_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/schedule/controllers/add_schedule_controller').default['handle']>>>
    }
  }
  'toggle_active_schedule': {
    methods: ["POST"]
    pattern: '/api/medications/:medicationId/schedules/:scheduleId/archive'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { medicationId: ParamValue; scheduleId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/schedule/controllers/toggle_active_schedule_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/schedule/controllers/toggle_active_schedule_controller').default['handle']>>>
    }
  }
  'delete_schedule': {
    methods: ["DELETE"]
    pattern: '/api/medications/:medicationId/schedules/:scheduleId'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { medicationId: ParamValue; scheduleId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#app/schedule/controllers/delete_schedule_controller').default['handle']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#app/schedule/controllers/delete_schedule_controller').default['handle']>>>
    }
  }
}
