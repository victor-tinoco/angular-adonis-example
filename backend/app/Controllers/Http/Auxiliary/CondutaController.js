'use strict'
const Conduta = use('App/Models/Auxiliar/Conduta')

class CondutaController {
  async index ({ request, response, view }) {
    const condutas = await Conduta.all()
    return condutas
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const conduta = await Conduta.create(data)
    return conduta
  }

  async show ({ params, request, response }) {
    try {
      const conduta = await Conduta.findOrFail(params.id)
      return conduta
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const conduta = await Conduta.findOrFail(params.id)
      const data = request.only(['nome'])
      conduta.merge(data)
      return conduta
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const conduta = await Conduta.findOrFail(params.id)
    try {
      conduta.delete()
      return conduta
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = CondutaController
