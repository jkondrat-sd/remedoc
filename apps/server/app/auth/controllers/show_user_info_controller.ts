import type { HttpContext } from '@adonisjs/core/http'

import UserTransformer from '#auth/transformers/user_transformer'

export default class ShowUserInfoController {
  async handle({ auth, serialize }: HttpContext) {
    const user = auth.use('api').getUserOrFail()

    return serialize.withoutWrapping(UserTransformer.transform(user))
  }
}
