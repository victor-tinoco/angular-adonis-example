'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Intituicao extends Model {
  static get table () {
    return 'instituicao'
  }

  static get primaryKey () {
    return 'id_instituicao'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = Intituicao
