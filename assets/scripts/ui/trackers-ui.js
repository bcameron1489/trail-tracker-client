'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')
const showUserTrails = require('../templates/display-user-content.hbs')
const store = require('../store')

const onGetTrackersSuccess = function (data) {
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.user-content').html('')
  $('.user-content').append(showTrackers)
  if (data.trackers.length > 0) {
    $('.trails-response').html('Successfully retreived trackers')
  } else {
    $('.trails-response').html('You have no trackers')
  }
}

const onGetTrackersFailure = function () {
  $('.trails-response').html('Failed to retreive your trails')
}

const updateTrailSuccess = function (data) {
  $('.input').val('')
  $('.user-content').html('')
  $('.trails-response').html('Trail updated!')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.user-content').append(showTrackers)
  store.tracker = data.tracker
  store.data = data.user
}

const updateTrailFailure = function (data) {
  $('.trails-response').html('Failed to update trail!')
  $('.input').val('')
  store.tracker = data.tracker
}

const deleteTrackerSuccess = function (data) {
  $('.trails-response').html('Successfuly removed trail!')
  $('.user.content').html('')
}

const deleteTrackerFailure = function (data) {
  $('.trails-response').html('Failed to remove trail!')
}

const userTrailsSuccess = function (data) {
  if (data.trackers.length > 0) {
    const showTrails = showUserTrails({ trackers: data.trackers })
    $('.user-tracker-btn').append(showTrails)
    $('.user-tracker-btn').show()
    $('.user-tracker-view').html('')
    $('.user-tracker-view').show()
    $('.trails-response').html('View Trails!')
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
