import app from '@adonisjs/core/services/app'
import logger from '@adonisjs/core/services/logger'
import { redis } from '@boringnode/queue/drivers/redis_adapter'

import redisConfig from '#config/redis'
import { defineConfig } from '#queue/define_config'

const queueConfig = defineConfig({
  default: 'redis',
  adapters: {
    redis: redis(redisConfig.connections.main),
  },
  locations: ['./app/jobs/**/*.ts'],
  jobFactory: async (JobClass) => {
    return app.container.make(JobClass)
  },
  logger: logger,
})

export default queueConfig
