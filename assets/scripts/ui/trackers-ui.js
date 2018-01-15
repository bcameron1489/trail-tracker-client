'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')
const store = require('../store')

const onGetTrackersSuccess = function (data) {
  console.log('successfully retreived trackers')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.content').html('')
  $('.content').append(showTrackers)
}

const onGetTrackersFailure = function () {
  console.log('failed to retreive trackers')
}

const updateTrailSuccess = function (data) {
  $('.input').val('')
  $('.content').html('')
  console.log('great success patch')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.content').append(showTrackers)
  store.data = data.user
}

const updateTrailFailure = function (data) {
  $('.input').val('')
  $('.update-alert').text('Failed To Update')
  store.fantasy = data.fantasy
}

module.exports = {
  onGetTrackersSuccess,
  onGetTrackersFailure,
  updateTrailSuccess,
  updateTrailFailure
}
