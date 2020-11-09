'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoCrime extends Model {
  static get table () {
    return 'tipo_crime'
  }

  static get primaryKey () {
    return 'id_tipo_crime'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = TipoCrime
