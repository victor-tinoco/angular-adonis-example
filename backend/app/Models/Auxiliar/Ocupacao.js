'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ocupacao extends Model {
  static get table () {
    return 'ocupacao'
  }

  static get primaryKey () {
    return 'id_ocupacao'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = Ocupacao
