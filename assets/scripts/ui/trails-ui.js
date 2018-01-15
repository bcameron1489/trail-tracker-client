'use strict'
const trailsIndex = require('../templates/trails-index.hbs')
// const store = require('../store')

const onGetTrailsSuccess = function (data) {
  console.log('successfully retreived trails')
  const showTrails = trailsIndex({ trails: data.trails })
  $('.content').html('')
  $('.content').append(showTrails)
}

const onGetTrailsFailure = function (data) {
  console.log('failed to retreive trails')
}

module.exports = {
  onGetTrailsSuccess,
  onGetTrailsFailure
}
