'use strict'

const crypto = require('crypto')
const moment = require('moment')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.reset_password_token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password', 'emails.forgot_password-text'],
        { email, token: user.reset_password_token, link: `${request.input('redirect_url')}?token=${user.reset_password_token}` },
        message => {
          message
            .to(user.email)
            .from('naoresponda@pcvi.com', 'PCVI')
            .subject('Recuperação de senha | PCVI')
        }
      )
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo não deu certo, certifique-se de que exista um usuário com esse e-mail.' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('reset_password_token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'O token de recuperação expirou.' } })
      }

      user.reset_password_token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado ao resetar sua senha.' } })
    }
  }
}

module.exports = ForgotPasswordController
