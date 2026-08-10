import router from '@adonisjs/core/services/router'

import { controllers } from '#generated/controllers'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router
      .get('/medications/:medicationId/schedules', [controllers.schedule.ListSchedule])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .post('/medications/:medicationId/schedules', [controllers.schedule.AddSchedule])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .post('/medications/:medicationId/schedules/:scheduleId/archive', [
        controllers.schedule.ToggleActiveSchedule,
      ])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .delete('/medications/:medicationId/schedules/:scheduleId', [
        controllers.schedule.DeleteSchedule,
      ])
      .middleware(middleware.auth({ guards: ['api'] }))
  })
  .prefix('/api')
