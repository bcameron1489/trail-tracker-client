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
  if ($('.clear-update-input').val() === '') {
    return $('.delete-response').html('Required field was empty')
  } else {
    $('.clear-update-input').val('')
    $('.user-content').html('')
    $('.delete-response').html('Trail updated!')
    setTimeout(function () { $('.delete-response').html('') }, 3000)
    const showTrackers = trackersIndex({ trackers: data.trackers })
    $('.user-content').append(showTrackers)
    store.tracker = data.tracker
    store.data = data.user
  }
}

const updateTrailFailure = function (data) {
  $('.delete-response').html('Failed to update trail!')
  setTimeout(function () { $('.delete-response').html('') }, 3000)
  $('.input').val('')
  store.tracker = data.tracker
}

const deleteTrackerSuccess = function (data) {
  $('.delete-response').html('Trail removed!')
  setTimeout(function () { $('.delete-response').html('') }, 3000)
  $('.user.content').html('')
}

const deleteTrackerFailure = function (data) {
  $('.trackers-response').html('Failed to remove trail!')
  setTimeout(function () { $('.delete-response').html('') }, 3000)
}

const userTrailsSuccess = function (data) {
  if (data.trackers.length > 0) {
    const showTrails = showUserTrails({ trackers: data.trackers })
    $('.user-tracker-btn').append(showTrails)
    $('.user-tracker-btn').show()
    $('.user-tracker-view').html('')
    $('.user-tracker-view').show()
    $('.user-tracker-response').html('View Your Trails!')
  } else {
    userTrailsFailure()
  }
}

const userTrailsFailure = function (data) {
  $('.user-tracker-btn').hide()
  $('.user-tracker-view').hide()
  $('.user-tracker-response').html('You have no trails!')
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
