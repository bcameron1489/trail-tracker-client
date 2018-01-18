'use strict'
const trailsIndex = require('../templates/trails-index.hbs')
const store = require('../store')

const onGetTrailsSuccess = function (data) {
  $('.trails-response').html('Successfully retreived trails!')
  const showTrails = trailsIndex({ trails: data.trails })
  $('.content').html('')
  $('.content').append(showTrails)
  store.data = data.trails
}

const onGetTrailsFailure = function (data) {
  $('.trails-response').html('Failed to retreive trails')
}

const postTrailSuccess = function (data) {
  $('.trails-response').html('Trail has been added!')
  store.tracker = data.tracker
  store.data = data.user
}

const postTrailFailure = function (data) {
  $('.trails-response').html('Failed to add trail')
}

module.exports = {
  onGetTrailsSuccess,
  onGetTrailsFailure,
  postTrailSuccess,
  postTrailFailure
}
