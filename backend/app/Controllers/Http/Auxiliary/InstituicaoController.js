'use strict'
const Instituicao = use('App/Models/Auxiliar/Instituicao')
class InstituicaoController {
  async index ({ request, response, view }) {
    const instituicoes = await Instituicao.all()
    return instituicoes
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const instituicao = await Instituicao.create(data)
    return instituicao
  }

  async show ({ params, request, response }) {
    try {
      const instituicao = await Instituicao.findOrFail(params.id)
      return instituicao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const instituicao = await Instituicao.findOrFail(params.id)
      const data = request.only(['nome'])
      instituicao.merge(data)
      return instituicao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const instituicao = await Instituicao.findOrFail(params.id)
    try {
      instituicao.delete()
      return instituicao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = InstituicaoController
