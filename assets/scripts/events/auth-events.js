'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/auth-api.js')
const ui = require('../ui/auth-ui.js')
// const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  onSignUp
}
