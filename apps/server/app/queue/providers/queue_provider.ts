import { configProvider } from '@adonisjs/core'
import { RuntimeException } from '@adonisjs/core/exceptions'
import type { ApplicationService } from '@adonisjs/core/types'
import { QueueManager } from '@boringnode/queue'
import type { QueueManagerConfig } from '@boringnode/queue/types'

export default class QueueProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * The container bindings have booted
   */
  async boot() {
    const config = await configProvider.resolve<QueueManagerConfig>(
      this.app,
      this.app.config.get('queue')
    )

    if (!config) {
      throw new RuntimeException('Invalid "config/queue.ts" file.')
    }

    await QueueManager.init(config)
  }

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {
    await QueueManager.destroy()
  }
}
