'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MeioInstrumento extends Model {
  static get table () {
    return 'meio_instrumento'
  }

  static get primaryKey () {
    return 'id_meio_instrumento'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = MeioInstrumento
