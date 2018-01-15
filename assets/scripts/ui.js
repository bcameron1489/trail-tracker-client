'use strict'
const store = require('./store')

const onSignUpSuccess = function () {
  console.log('great success')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  console.log('signup failure')
  $('.signup').val('')
}

const onSignInSuccess = function (data) {
  console.log('signin success')
  $('.input').val('')
  $('.content').show()
  store.user = data.user
}

const onSignInFailure = function (data) {
  console.log('signin failure')
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  console.log('sign out success')
  $('.input').val('')
  $('.content').hide()
}

const onSignOutFailure = function (data) {
  console.log('sign out failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
