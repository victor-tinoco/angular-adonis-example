'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, response, auth }) {
    try {
      const { username, password } = request.all()
      const user = await User.findBy('username', username)
      if (user) {
        if (user.active) {
          const token = await auth.attempt(username, password)
          token.username = username
          return token
        } else {
          return response.status(400).send({ error: { message: 'O usuário que você está tentando entrar não está ativo.' } })
        }
      }
      return response.status(400).send({ error: { message: `Cannot find user with username as ${username}` } })
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Cannot verify user password' } })
    }
  }
}

module.exports = SessionController
