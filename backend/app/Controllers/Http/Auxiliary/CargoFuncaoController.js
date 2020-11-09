'use strict'

const CargoFuncao = use('App/Models/Auxiliar/CargoFuncao')

class CargoFuncaoController {
  async index ({ request, response, view }) {
    const cargos = await CargoFuncao.all()
    return cargos
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const cargo = await CargoFuncao.create(data)
    return cargo
  }

  async show ({ params, request, response }) {
    try {
      const cargo = await CargoFuncao.findOrFail(params.id)
      return cargo
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const cargo = await CargoFuncao.findOrFail(params.id)
      const data = request.only(['nome'])
      cargo.merge(data)
      return cargo
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const cargo = await CargoFuncao.findOrFail(params.id)
    try {
      cargo.delete()
      return cargo
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = CargoFuncaoController
