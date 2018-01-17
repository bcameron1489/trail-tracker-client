'use strict'

const store = require('../store')
const config = require('../config')

const getTrails = function () {
  return $.ajax({
    url: config.apiOrigin + '/trails',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const postTrail = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/trackers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const deleteTrail = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/trails/' + data.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getTrails,
  postTrail
  // deleteTrail
}
