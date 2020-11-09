'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }
    return response.status(error.status).send({ error: error.message })
  }

  async report (error, { request }) {
    console.log(error)
  }
}

module.exports = ExceptionHandler
