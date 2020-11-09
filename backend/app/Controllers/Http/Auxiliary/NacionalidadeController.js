'use strict'
const Nacionalidade = use('App/Models/Auxiliar/Nacionalidade')

class NacionalidadeController {
  async index ({ request, response, view }) {
    const nacionalidades = await Nacionalidade.all()
    return nacionalidades
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const nacionalidade = await Nacionalidade.create(data)
    return nacionalidade
  }

  async show ({ params, request, response }) {
    try {
      const nacionalidade = await Nacionalidade.findOrFail(params.id)
      return nacionalidade
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const nacionalidade = await Nacionalidade.findOrFail(params.id)
      const data = request.only(['nome'])
      nacionalidade.merge(data)
      return nacionalidade
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const nacionalidade = await Nacionalidade.findOrFail(params.id)
    try {
      nacionalidade.delete()
      return nacionalidade
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = NacionalidadeController
