'use strict'
const NaturezaLesao = use('App/Models/Auxiliar/NaturezaLesao')

class NaturezaLesaoController {
  async index ({ request, response, view }) {
    const naturezas = await NaturezaLesao.all()
    return naturezas
  }

  async store ({ request, response }) {
    const data = request.only(['nome', 'descricao'])
    const natureza = await NaturezaLesao.create(data)
    return natureza
  }

  async show ({ params, request, response }) {
    try {
      const natureza = await NaturezaLesao.findOrFail(params.id)
      return natureza
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const natureza = await NaturezaLesao.findOrFail(params.id)
      const data = request.only(['nome', 'descricao'])
      natureza.merge(data)
      return natureza
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const natureza = await NaturezaLesao.findOrFail(params.id)
    try {
      natureza.delete()
      return natureza
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = NaturezaLesaoController
