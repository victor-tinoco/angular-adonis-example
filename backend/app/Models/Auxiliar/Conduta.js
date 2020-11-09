'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Conduta extends Model {
  static get table () {
    return 'conduta'
  }

  static get primaryKey () {
    return 'id_conduta'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = Conduta
