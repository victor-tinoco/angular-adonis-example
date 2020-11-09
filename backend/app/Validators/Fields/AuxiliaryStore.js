'use strict'

const Antl = use('Antl')

class AuxiliarStore {
  get validateAll () {
    return true
  }

  get rules () {
    var url = this.ctx.request.request.url
    switch (url) {
      case '/jobs':
        console.log('to aqui')
        return {
          nome: 'required|string|unique:cargo_funcao, nome'
        }
      case '/conducts':
        return {
          nome: 'required|string|unique:conduta, nome'
        }
      case '/sources-type':
        return {
          nome: 'required|string|unique:fonte_tipo, nome'
        }
      case '/institutions':
        return {
          nome: 'required|string|unique:instituicao, nome'
        }
      case '/nationalities':
        return {
          nome: 'required|string|unique:nacionalidade, nome'
        }
      case '/ocupations':
        return {
          nome: 'required|string|unique:ocupacao, nome'
        }
      case '/religions':
        return {
          nome: 'required|string|unique:religiao_credo, nome'
        }
      case '/deponents':
        return {
          nome: 'required|string|unique:tipo_depoente, nome'
        }
      case '/instruments':
        return {
          nome: 'required|string|unique:meio_instrumento, nome',
          equip_oficial: 'required|boolean',
          obs_meio_instru: 'string'
        }
      case '/nature-lesion':
        return {
          nome: 'required|string|unique:natureza_lesao, nome',
          descricao: 'string'
        }
      case '/crimes':
        return {
          id_natureza_lesao: 'required|number|exists:natureza_lesao,id_natureza_lesao',
          nome: 'required|string|unique:tipo_crime, nome',
          artigo: 'string',
          descricao: 'string'
        }
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = AuxiliarStore
