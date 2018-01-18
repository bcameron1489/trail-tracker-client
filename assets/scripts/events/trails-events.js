'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/trails-api.js')
const trackApi = require('../api/trackers-api.js')
const ui = require('../ui/trails-ui.js')
const trackUi = require('../ui/trackers-ui.js')

const onGetTrails = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getTrails(data)
    .then(ui.onGetTrailsSuccess)
    .catch(ui.onGetTrailsFailure)
}

const onPostTrail = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.postTrail(data)
    .then(ui.postTrailSuccess)
    .then(trackApi.trackerIndex)
    .then(trackUi.onGetTrackersSuccess)
    .catch(ui.postTrailFailure)
}

const addTrailHandlers = () => {
  $('#get-trails').on('submit', onGetTrails)
  $('.content').on('submit', '.create-tracker', onPostTrail)
}

module.exports = {
  onGetTrails,
  onPostTrail,
  addTrailHandlers
}
