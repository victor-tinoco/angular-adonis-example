'use strict'

const Antl = use('Antl')

class Account {
  get validateAll () {
    return true
  }

  get rules () {
    const userId = this.ctx.auth.user.id
    return {
      username: `string|unique:user,username,id,${userId}`,
      id_group: 'number|exists:group,id_group',
      id_ceap: 'number|exists:ceap,id_ceap',
      name: 'string',
      email: `email|unique:user,email,id,${userId}`
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Account
