import { BaseTransformer } from '@adonisjs/core/transformers'

import type { User } from '#core/services/db/schema'

export default class UserTransformer extends BaseTransformer<User> {
  toObject() {
    return {
      id: this.resource.id,
      discordId: this.resource.discordId,
      username: this.resource.username,
      avatarUrl: this.resource.avatarUrl,
      createdAt: this.resource.createdAt.toISOString(),
      updatedAt: this.resource.updatedAt.toISOString(),
    }
  }
}
