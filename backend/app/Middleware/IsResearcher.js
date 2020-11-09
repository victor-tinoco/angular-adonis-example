'use strict'
const User = use('App/Models/User')

class IsResearcher {
  async handle ({ request, response, auth }, next) {
    const user = await User.findOrFail(auth.user.id)
    await user.load('group')
    if (user.id_group !== 1 || user.id_group !== 2) {
      return response
        .status(401)
        .send({ error: { message: 'Você precisa ser pesquisador para realizar está ação.' } })
    }
    await next()
  }
}

module.exports = IsResearcher
