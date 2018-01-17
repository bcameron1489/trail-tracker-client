'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')
const showUserTrails = require('../templates/display-user-content.hbs')
const store = require('../store')

const onGetTrackersSuccess = function (data) {
  console.log('successfully retreived trackers')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.user-content').append(showTrackers)
}

const onGetTrackersFailure = function () {
  console.log('failed to retreive trackers')
}

const updateTrailSuccess = function (data) {
  $('.input').val('')
  $('.user-content').html('')
  console.log('great success patch')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.user-content').append(showTrackers)
  store.tracker = data.tracker
  store.data = data.user
}

const updateTrailFailure = function (data) {
  $('.input').val('')
  store.tracker = data.tracker
}

const deleteTrackerSuccess = function (data) {
  console.log('Successfully Removed Tracker')
  $('.content').html('')
}

const deleteTrackerFailure = function (data) {
  console.log('Failed To Remove Player')
}

const userTrailsSuccess = function (data) {
  const showTrails = showUserTrails({ trackers: data.trackers })
  $('.user-tracker-view').append(showTrails)
  console.log('success')
}

const userTrailsFailure = function (data) {
  console.log('failure')
}

module.exports = {
  onGetTrackersSuccess,
  onGetTrackersFailure,
  updateTrailSuccess,
  updateTrailFailure,
  deleteTrackerSuccess,
  deleteTrackerFailure,
  userTrailsSuccess,
  userTrailsFailure
}
