/** @type {import('@adonisjs/framework/src/Route/Manager'} */
'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.resource('passwords', 'ForgotPasswordController')
  .only(['store', 'update'])
Route.group(() => {
  Route.resource('users', 'UserController')
    .only(['store', 'update', 'index', 'show'])
    .validator(
      new Map([
        [['users.store'], 'User/UserStore'],
        [['users.update'], 'User/UserUpdate']
      ])
    )
  Route.resource('jobs', 'Auxiliary/CargoFuncaoController')
    .apiOnly()
    .validator(
      new Map([
        [['jobs.store'], 'Fields/AuxiliaryStore'],
        [['jobs.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('conducts', 'Auxiliary/CondutaController')
    .apiOnly()
    .validator(
      new Map([
        [['conducts.store'], 'Fields/AuxiliaryStore'],
        [['conducts.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('sources-type', 'Auxiliary/FonteTipoController')
    .apiOnly()
    .validator(
      new Map([
        [['sources-type.store'], 'Fields/AuxiliaryStore'],
        [['sources-type.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('institutions', 'Auxiliary/InstituicaoController')
    .apiOnly()
    .validator(
      new Map([
        [['institutions.store'], 'Fields/AuxiliaryStore'],
        [['institutions.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('instruments', 'Auxiliary/MeioInstrumentoController')
    .apiOnly()
    .validator(
      new Map([
        [['instruments.store'], 'Fields/AuxiliaryStore'],
        [['instruments.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('nationalities', 'Auxiliary/NacionalidadeController')
    .apiOnly()
    .validator(
      new Map([
        [['nationalities.store'], 'Fields/AuxiliaryStore'],
        [['nationalities.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('nature-lesion', 'Auxiliary/NaturezaLesaoController')
    .apiOnly()
    .validator(
      new Map([
        [['nature-lesion.store'], 'Fields/AuxiliaryStore'],
        [['nature-lesion.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('ocupations', 'Auxiliary/OcupacaoController')
    .apiOnly()
    .validator(
      new Map([
        [['ocupations.store'], 'Fields/AuxiliaryStore'],
        [['ocupations.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('religions', 'Auxiliary/ReligiaoCredoController')
    .apiOnly()
    .validator(
      new Map([
        [['religions.store'], 'Fields/AuxiliaryStore'],
        [['religions.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('crimes', 'Auxiliary/TipoCrimeController')
    .apiOnly()
    .validator(
      new Map([
        [['crimes.store'], 'Fields/AuxiliaryStore'],
        [['crimes.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
  Route.resource('deponents', 'Auxiliary/TipoDepoenteController')
    .apiOnly()
    .validator(
      new Map([
        [['deponents.store'], 'Fields/AuxiliaryStore'],
        [['deponents.update'], 'Fields/AuxiliaryUpdate']
      ])
    )
}).middleware(['auth', 'isAdmin'])
Route.group(() => {
  Route.get('account', 'AccountController.show')
  Route.put('account', 'AccountController.update').validator('Account/Account')
  Route.put('account/password', 'AccountController.updatePassword').validator('Account/AccountPassword')
}).middleware(['auth'])
