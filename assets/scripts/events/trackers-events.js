'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/trackers-api.js')
const ui = require('../ui/trackers-ui.js')

const onTrackerIndex = function (event) {
  event.preventDefault()
  api.trackerIndex()
    .then(ui.success)
    .catch(ui.failure)
}

const addTrackerHandlers = () => {
  $('#user-trackers').on('submit', onTrackerIndex)
}

module.exports = {
  onTrackerIndex,
  addTrackerHandlers
}
