'use strict'

/*
|--------------------------------------------------------------------------
| GroupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Group = use('App/Models/Group')

class GroupSeeder {
  async run () {
    await Group.create({
      id_group: 1,
      title: 'Administrador',
      description: ''
    })
    await Group.create({
      id_group: 2,
      title: 'Pesquisador',
      description: ''
    })
    await Group.create({
      id_group: 3,
      title: 'Curador',
      description: ''
    })
  }
}

module.exports = GroupSeeder
