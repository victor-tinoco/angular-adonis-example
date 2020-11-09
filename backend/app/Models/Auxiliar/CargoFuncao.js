'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CargoFuncao extends Model {
  static get table () {
    return 'cargo_funcao'
  }

  static get primaryKey () {
    return 'id_cargo_funcao'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = CargoFuncao
