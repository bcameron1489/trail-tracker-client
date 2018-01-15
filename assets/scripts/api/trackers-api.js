'use strict'

const store = require('../store')
const config = require('../config')

const trackerIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/trackers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTrail = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trackers/' + data.tracker.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteTracker = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trackers/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  trackerIndex,
  updateTrail,
  deleteTracker
}
