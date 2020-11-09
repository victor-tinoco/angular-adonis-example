'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipoDepoente extends Model {
  static get table () {
    return 'tipo_depoente'
  }

  static get primaryKey () {
    return 'id_tipo_depoente'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = TipoDepoente
