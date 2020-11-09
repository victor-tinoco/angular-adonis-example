'use strict'
const Ocupacao = use('App/Models/Auxiliar/Ocupacao')

class OcupacaoController {
  async index ({ request, response, view }) {
    const ocupacoes = await Ocupacao.all()
    return ocupacoes
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const ocupacao = await Ocupacao.create(data)
    return ocupacao
  }

  async show ({ params, request, response }) {
    try {
      const ocupacao = await Ocupacao.findOrFail(params.id)
      return ocupacao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const ocupacao = await Ocupacao.findOrFail(params.id)
      const data = request.only(['nome'])
      ocupacao.merge(data)
      return ocupacao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const ocupacao = await Ocupacao.findOrFail(params.id)
    try {
      ocupacao.delete()
      return ocupacao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = OcupacaoController
