'use strict'
const TipoDepoente = use('App/Models/Auxiliar/TipoDepoente')

class TipoDepoenteController {
  async index ({ request, response, view }) {
    const depoentes = await TipoDepoente.all()
    return depoentes
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const depoente = await TipoDepoente.create(data)
    return depoente
  }

  async show ({ params, request, response }) {
    try {
      const depoente = await TipoDepoente.findOrFail(params.id)
      return depoente
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const depoente = await TipoDepoente.findOrFail(params.id)
      const data = request.only(['nome'])
      depoente.merge(data)
      return depoente
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const depoente = await TipoDepoente.findOrFail(params.id)
    try {
      depoente.delete()
      return depoente
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = TipoDepoenteController
