'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ReligiaoCredo extends Model {
  static get table () {
    return 'religiao_credo'
  }

  static get primaryKey () {
    return 'id_religiao_credo'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = ReligiaoCredo
