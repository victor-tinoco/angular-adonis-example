'use strict'

class AccountPassword {
  get rules () {
    return {
      oldPassword: 'required|string',
      password: 'required|string|confirmed|min:6'
    }
  }
}

module.exports = AccountPassword
