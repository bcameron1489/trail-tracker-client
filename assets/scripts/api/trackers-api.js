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

module.exports = {
  trackerIndex
}
