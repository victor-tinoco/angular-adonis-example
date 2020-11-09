'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Ceap = use('App/Models/Ceap')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await Ceap.create({
      id_ceap: 1,
      nome: 'OVP-DH',
      responsavel: 'Fulano',
      telefone: '1199999999',
      email: 'OVP-DH@OVPDH.com',
      uf: 'SP',
      municipio: 'São Paulo',
      bairro: 'Centro',
      logradouro: 'Endereço Centro',
      numero: '000',
      complemento: 'B',
      cep: '01010-010'
    })
    await User.create({
      name: 'Victor Tinoco',
      username: 'victor.tinoco',
      active: true,
      email: 'victormartinstinoco@live.com',
      id_ceap: 1,
      id_group: 1,
      password: '123456'
    })
  }
}

module.exports = UserSeeder
