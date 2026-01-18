import { configProvider } from '@adonisjs/core'
import type { QueueManagerConfig } from '@boringnode/queue/types'

export function defineConfig(config: QueueManagerConfig) {
  return configProvider.create(async () => config)
}
