'use strict'

const Model = use('Model')

class Ceap extends Model {
  static get table () {
    return 'ceap'
  }

  static get primaryKey () {
    return 'id_ceap'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = Ceap
