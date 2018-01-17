'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')
const showUserTrails = require('../templates/display-user-content.hbs')
const store = require('../store')

const onGetTrackersSuccess = function (data) {
  if (data.trackers.length > 0) {
    $('.user-content').html('')
    const showTrackers = trackersIndex({ trackers: data.trackers })
    $('.user-content').append(showTrackers)
  } else {
    return $('.auth-response').text('You have no trails yet!')
  }
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
  $('.user.content').html('')
}

const deleteTrackerFailure = function (data) {
  console.log('Failed To Remove Player')
}

const userTrailsSuccess = function (data) {
  if (data.trackers.length > 0) {
    const showTrails = showUserTrails({ trackers: data.trackers })
    $('.user-tracker-btn').append(showTrails)
    $('.user-tracker-btn').show()
    $('.user-tracker-view').html('')
    $('.user-tracker-view').show()
    console.log('success')
  } else {
    userTrailsFailure()
  }
}

const userTrailsFailure = function (data) {
  $('.user-tracker-btn').hide()
  $('.user-tracker-view').hide()
  $('.auth-response').text('You have no trails! Click home to return')
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
