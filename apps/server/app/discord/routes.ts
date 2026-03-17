import router from '@adonisjs/core/services/router'

import { controllers } from '#generated/controllers'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.get('/:discordId/schedules', [controllers.discord.ListUserSchedule])
  })
  .prefix('/api/discord')
  .middleware(middleware.discordBot())
