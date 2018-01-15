'user strict'

const trackersIndex = require('../templates/trackers-index.hbs')

const onGetTrackersSuccess = function (data) {
  console.log('successfully retreived trackers')
  const showTrackers = trackersIndex({ trackers: data.trackers })
  $('.content').html('')
  $('.content').append(showTrackers)
}

const onGetTrackersFailure = function () {
  console.log('failed to retreive trackers')
}

module.exports = {
  onGetTrackersSuccess,
  onGetTrackersFailure
}
