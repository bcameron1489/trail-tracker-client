'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/trails-api.js')
const ui = require('../ui/trails-ui.js')

const onGetTrails = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getTrails(data)
    .then(ui.onGetTrailsSuccess)
    .catch(ui.onGetTrailsFailure)
}

const addTrailHandlers = () => {
  $('#get-trails').on('submit', onGetTrails)
}

module.exports = {
  onGetTrails,
  addTrailHandlers
}
