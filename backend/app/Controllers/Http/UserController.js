'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['active', 'username', 'email', 'password', 'id_group', 'id_ceap', 'name'])

    const user = await User.create(data)

    return user
  }

  async index ({ request }) {
    const { page } = request.get()
    const users = await User
      .query()
      .with('ceap')
      .with('group')
      .paginate(page)

    return users
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.load('ceap')
    await user.load('group')

    return user
  }

  async update ({ request, params }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['username', 'email', 'id_group', 'id_ceap', 'name', 'active'])

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
