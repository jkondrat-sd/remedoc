import { configProvider } from '@adonisjs/core'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { Worker } from '@boringnode/queue'
import type { QueueManagerConfig } from '@boringnode/queue/types'

export default class QueueWork extends BaseCommand {
  static commandName = 'queue:work'
  static description = ''

  static options: CommandOptions = {
    startApp: true,
    staysAlive: true,
  }

  #worker!: Worker
  #config!: QueueManagerConfig

  async prepare() {
    this.#config = (await configProvider.resolve(this.app, this.app.config.get('queue')))!
    this.#worker = new Worker(this.#config)
  }

  async run() {
    await this.#worker.start(['default'])
  }
}
