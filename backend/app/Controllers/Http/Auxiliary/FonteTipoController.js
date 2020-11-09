'use strict'
const FonteTipo = use('App/Models/Auxiliar/FonteTipo')

class FonteTipoController {
  async index ({ request, response, view }) {
    const fontes = await FonteTipo.all()
    return fontes
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const fonte = await FonteTipo.create(data)
    return fonte
  }

  async show ({ params, request, response }) {
    try {
      const fonte = await FonteTipo.findOrFail(params.id)
      return fonte
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const fonte = await FonteTipo.findOrFail(params.id)
      const data = request.only(['nome'])
      fonte.merge(data)
      return fonte
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const fonte = await FonteTipo.findOrFail(params.id)
    try {
      fonte.delete()
      return fonte
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = FonteTipoController
