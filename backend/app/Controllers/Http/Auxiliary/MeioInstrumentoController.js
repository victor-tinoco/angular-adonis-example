'use strict'
const MeioInstrumento = use('App/Models/Auxiliar/MeioInstrumento')
class MeioInstrumentoController {
  async index ({ request, response, view }) {
    const instrumentos = await MeioInstrumento.all()
    return instrumentos
  }

  async store ({ request, response }) {
    const data = request.only(['nome', 'equip_oficial', 'obs_meio_instru'])
    const instrumento = await MeioInstrumento.create(data)
    return instrumento
  }

  async show ({ params, request, response }) {
    try {
      const instrumento = await MeioInstrumento.findOrFail(params.id)
      return instrumento
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async update ({ params, request, response }) {
    try {
      const instrumento = await MeioInstrumento.findOrFail(params.id)
      const data = request.only(['nome', 'equip_oficial', 'obs_meio_instru'])
      instrumento.merge(data)
      return instrumento
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }

  async destroy ({ params, request, response }) {
    const instrumento = await MeioInstrumento.findOrFail(params.id)
    try {
      instrumento.delete()
      return instrumento
    } catch (error) {
      return response.status(404).send({ error: { message: 'Não foi possível encontrar o campo' } })
    }
  }
}

module.exports = MeioInstrumentoController
