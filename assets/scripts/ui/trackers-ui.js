'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')
const showUserTrails = require('../templates/display-user-content.hbs')
const store = require('../store')

const onGetTrackersSuccess = function (data) {
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.user-content').empty()
  $('.user-content').append(showTrackers)
  if (data.trackers.length > 0) {
    $('.trackers-response').html('Successfully retreived trackers')
  } else {
    $('.trackers-response').html('You have no trackers')
  }
}

const onGetTrackersFailure = function () {
  $('.trackers-response').html('Failed to retreive your trails')
}

const updateTrailSuccess = function (data) {
  $('.input').val('')
  $('.user-content').html('')
  $('.trackers-response').html('Trail updated!')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.user-content').append(showTrackers)
  store.tracker = data.tracker
  store.data = data.user
}

const updateTrailFailure = function (data) {
  $('.trackers-response').html('Failed to update trail!')
  $('.input').val('')
  store.tracker = data.tracker
}

const deleteTrackerSuccess = function (data) {
  $('.trackers-response').html('Successfuly removed trail!')
  $('.user.content').html('')
}

const deleteTrackerFailure = function (data) {
  $('.trackers-response').html('Failed to remove trail!')
}

const userTrailsSuccess = function (data) {
  if (data.trackers.length > 0) {
    const showTrails = showUserTrails({ trackers: data.trackers })
    $('.user-tracker-btn').append(showTrails)
    $('.user-tracker-btn').show()
    $('.user-tracker-view').html('')
    $('.user-tracker-view').show()
    $('.trackers-response').html('View Trails!')
  } else {
    userTrailsFailure()
  }
}

const userTrailsFailure = function (data) {
  $('.user-tracker-btn').hide()
  $('.user-tracker-view').hide()
  $('.trackers-response').html('You have no trails! Click home to return')
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
