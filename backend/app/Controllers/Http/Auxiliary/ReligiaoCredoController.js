'use strict'
const ReligiaoCredo = use('App/Models/Auxiliar/ReligiaoCredo')

class ReligiaoCredoController {
  async index ({ request, response, view }) {
    const religioes = await ReligiaoCredo.all()
    return religioes
  }

  async store ({ request, response }) {
    const data = request.only(['nome'])
    const religiao = await ReligiaoCredo.create(data)
    return religiao
  }

  async show ({ params, request, response }) {
    try {
      const religiao = await ReligiaoCredo.findOrFail(params.id)
      return religiao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const religiao = await ReligiaoCredo.findOrFail(params.id)
      const data = request.only(['nome'])
      religiao.merge(data)
      return religiao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const religiao = await ReligiaoCredo.findOrFail(params.id)
    try {
      religiao.delete()
      return religiao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = ReligiaoCredoController
