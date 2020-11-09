'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FonteTipo extends Model {
  static get table () {
    return 'fonte_tipo'
  }

  static get primaryKey () {
    return 'id_fonte_tipo'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = FonteTipo
