'use strict'

const Antl = use('Antl')

class AuxiliarStore {
  get validateAll () {
    return true
  }

  get rules () {
    var url = this.ctx.request.request.url
    var format = url.split('/')
    url = `/${format[1]}`
    switch (url) {
      case '/jobs':
        return {
          nome: 'string|unique:cargo_funcao, nome'
        }
      case '/conducts':
        return {
          nome: 'string|unique:conduta, nome'
        }
      case '/sources-type':
        return {
          nome: 'string|unique:fonte_tipo, nome'
        }
      case '/institutions':
        return {
          nome: 'string|unique:instituicao, nome'
        }
      case '/nationalities':
        return {
          nome: 'string|unique:nacionalidade, nome'
        }
      case '/ocupations':
        return {
          nome: 'string|unique:ocupacao, nome'
        }
      case '/religions':
        return {
          nome: 'string|unique:religiao_credo, nome'
        }
      case '/deponents':
        return {
          nome: 'string|unique:tipo_depoente, nome'
        }
      case '/instruments':
        return {
          nome: 'string|unique:meio_instrumento, nome',
          equip_oficial: 'boolean',
          obs_meio_instru: 'string'
        }
      case '/nature-lesion':
        return {
          nome: 'string|unique:natureza_lesao, nome',
          descricao: 'string'
        }
      case '/crimes':
        return {
          id_natureza_lesao: 'number|exists:natureza_lesao,id_natureza_lesao',
          nome: 'string|unique:tipo_crime, nome',
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
