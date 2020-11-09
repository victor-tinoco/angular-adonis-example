'use strict'

const Model = use('Model')

class Group extends Model {
  static get table () {
    return 'group'
  }

  static get primaryKey () {
    return 'id_group'
  }
}

module.exports = Group
