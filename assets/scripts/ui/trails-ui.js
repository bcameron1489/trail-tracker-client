'use strict'
const trailsIndex = require('../templates/trails-index.hbs')
const store = require('../store')

const onGetTrailsSuccess = function (data) {
  console.log('successfully retreived trails')
  const showTrails = trailsIndex({ trails: data.trails })
  $('.content').html('')
  $('.content').append(showTrails)
  store.data = data.trails
}

const onGetTrailsFailure = function (data) {
  console.log('failed to retreive trails')
}

const postTrailSuccess = function (data) {
  console.log('successfully created tracker')
  store.data = data.user
  store.tracker = data.tracker
}

const postTrailFailure = function (data) {
  console.log('post failure')
}

module.exports = {
  onGetTrailsSuccess,
  onGetTrailsFailure,
  postTrailSuccess,
  postTrailFailure
}
