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
  console.log(data)
  api.updateTrail(data)
    .then(ui.updateTrailSuccess)
    .then(api.trackerIndex)
    .then(ui.onGetTrackersSuccess)
    .catch(ui.onGetTrackersFailure)
}

const onDeleteTracker = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteTracker(data)
    .then(ui.deleteTrackerSuccess)
    .catch(ui.deletePlayerFailure)
}

const addTrackerHandlers = () => {
  $('#user-trackers').on('submit', onTrackerIndex)
  $('.content').on('submit', '.patch-trail', onUpdateTrail)
  $('.content').on('submit', '.delete-tracker', onDeleteTracker)
}

module.exports = {
  onTrackerIndex,
  onUpdateTrail,
  onDeleteTracker,
  addTrackerHandlers
}
