import router from '@adonisjs/core/services/router'

import { controllers } from '#generated/controllers'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router
      .get('/', [controllers.medication.ListMedication])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .post('/', [controllers.medication.CreateMedication])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .get('/:medicationId', [controllers.medication.ShowMedication])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .put('/:medicationId', [controllers.medication.UpdateMedication])
      .middleware(middleware.auth({ guards: ['api'] }))
    router
      .post('/:medicationId/archive', [controllers.medication.ToggleArchiveMedication])
      .middleware(middleware.auth({ guards: ['api'] }))
  })
  .prefix('/api/medications')
