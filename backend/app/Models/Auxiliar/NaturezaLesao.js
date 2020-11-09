'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NaturezaLesao extends Model {
  static get table () {
    return 'natureza_lesao'
  }

  static get primaryKey () {
    return 'id_natureza_lesao'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = NaturezaLesao
