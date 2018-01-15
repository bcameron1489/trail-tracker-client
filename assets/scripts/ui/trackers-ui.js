'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')

const success = function (data) {
  console.log('successfully retreived trackers')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.content').html('')
  $('.content').append(showTrackers)
}

const failure = function () {
  console.log('failed to retreive trackers')
}

module.exports = {
  success,
  failure
}
