'use strict'

const User = use('App/Models/User')

class AccountController {
  async show ({ auth }) {
    const user = await User.findOrFail(auth.user.id)

    await user.load('ceap')
    await user.load('group')

    return user
  }

  async update ({ request, auth }) {
    const user = await User.findOrFail(auth.user.id)
    const data = request.only(['username', 'email', 'id_group', 'id_ceap', 'name'])

    user.merge(data)

    await user.save()

    return user
  }

  async updatePassword ({ request, auth, response }) {
    const user = await User.findOrFail(auth.user.id)
    const data = request.only(['password', 'oldPassword'])
    const isSame = await User.checkIsPassword(data.oldPassword, user.password)
    if (isSame) {
      user.merge({ password: data.password })
      await user.save()
      return user
    } else {
      return response
        .status(400)
        .send({ error: { message: 'A senha antiga não coincide' } })
    }
  }
}

module.exports = AccountController
