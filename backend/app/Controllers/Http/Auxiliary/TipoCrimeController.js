'use strict'
const TipoCrime = use('App/Models/Auxiliar/TipoCrime')

class TipoCrimeController {
  async index ({ request, response, view }) {
    const crimes = await TipoCrime.all()
    return crimes
  }

  async store ({ request, response }) {
    const data = request.only(['id_natureza_lesao', 'nome', 'artigo', 'descricao'])
    const crime = await TipoCrime.create(data)
    return crime
  }

  async show ({ params, request, response }) {
    try {
      const crime = await TipoCrime.findOrFail(params.id)
      return crime
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const crime = await TipoCrime.findOrFail(params.id)
      const data = request.only(['id_natureza_lesao', 'nome', 'artigo', 'descricao'])
      crime.merge(data)
      return crime
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const crime = await TipoCrime.findOrFail(params.id)
    try {
      crime.delete()
      return crime
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = TipoCrimeController
