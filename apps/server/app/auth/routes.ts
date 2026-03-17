import router from '@adonisjs/core/services/router'

import { controllers } from '#generated/controllers'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router
      .get('/me', [controllers.auth.ShowUserInfo])
      .middleware(middleware.auth({ guards: ['api'] }))
    router.get('/redirect', [controllers.auth.DiscordRedirect])
    router.get('/callback', [controllers.auth.DiscordCallback])
    router
      .post('/logout', [controllers.auth.Logout])
      .middleware(middleware.auth({ guards: ['api'] }))
  })
  .prefix('/api/auth')
