'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get table () {
    return 'user'
  }

  static get primaryKey () {
    return 'id'
  }

  ceap () {
    return this.belongsTo('App/Models/Ceap', 'id_ceap', 'id_ceap')
  }

  group () {
    return this.belongsTo('App/Models/Group', 'id_group', 'id_group')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  static async checkIsPassword (password, encryptedPassword) {
    return await Hash.verify(password, encryptedPassword)
  }
}

module.exports = User
