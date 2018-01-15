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

const onChangePasswordSuccess = function () {
  console.log('succeeded to change pw')
  $('.input').val('')
}

const onChangePasswordFailure = function () {
  console.log('failed to change pw')
  $('.input').val('')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
