'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Nacionalidade extends Model {
  static get table () {
    return 'nacionalidade'
  }

  static get primaryKey () {
    return 'id_nacionalidade'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = Nacionalidade
