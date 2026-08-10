/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  showUserInfo: typeof routes['show_user_info']
  discordRedirect: typeof routes['discord_redirect']
  discordCallback: typeof routes['discord_callback']
  logout: typeof routes['logout']
  listUserSchedule: typeof routes['list_user_schedule']
  listMedication: typeof routes['list_medication']
  createMedication: typeof routes['create_medication']
  showMedication: typeof routes['show_medication']
  updateMedication: typeof routes['update_medication']
  toggleArchiveMedication: typeof routes['toggle_archive_medication']
  listSchedule: typeof routes['list_schedule']
  addSchedule: typeof routes['add_schedule']
  toggleActiveSchedule: typeof routes['toggle_active_schedule']
  deleteSchedule: typeof routes['delete_schedule']
}
