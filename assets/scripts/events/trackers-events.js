'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/trackers-api.js')
const ui = require('../ui/trackers-ui.js')

const onTrackerIndex = function (event) {
  event.preventDefault()
  api.trackerIndex()
    .then(ui.onGetTrackersSuccess)
    .catch(ui.onGetTrackersFailure)
}

const onUpdateTrail = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateTrail(data)
    .then(ui.updateTrailSuccess)
    .then(api.trackerIndex)
    .then(ui.onGetTrackersSuccess)
    .catch(ui.onGetTrackersFailure)
}

const addTrackerHandlers = () => {
  $('#user-trackers').on('submit', onTrackerIndex)
  $('.content').on('submit', '.patch-trail', onUpdateTrail)
}

module.exports = {
  onTrackerIndex,
  onUpdateTrail,
  addTrackerHandlers
}
