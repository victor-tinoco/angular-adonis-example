'use strict'

const Antl = use('Antl')

class UserStore {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      active: 'required|boolean',
      username: 'required|string|unique:user,username',
      id_group: 'required|number|exists:group,id_group',
      id_ceap: 'required|number|exists:ceap,id_ceap',
      password: 'required|string|confirmed|min:6',
      name: 'required|string',
      email: 'required|email|unique:user,email',
      token_created_at: 'date'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = UserStore
