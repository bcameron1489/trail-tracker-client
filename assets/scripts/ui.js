'use strict'
const store = require('./store')

// hide/show content callbacks

const showContent = function () {
  $('.total-content').show()
}

const hideContent = function () {
  $('.total-content').hide('')
}

const preAuthContent = function () {
  $('.auth-wrapper').hide()
}

const showPreAuthContent = function () {
  $('.auth-wrapper').show()
}

const showPostAuth = function () {
  $('.post-auth-forms').show()
}

const hidePostAuth = function () {
  $('.post-auth-forms').hide()
}

// ui response
const onSignUpSuccess = function () {
  console.log('great success')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  console.log('signup failure')
  $('.signup').val('')
}

const onSignInSuccess = function (data) {
  showContent()
  showPostAuth()
  preAuthContent()
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
  hideContent()
  showPreAuthContent()
  hidePostAuth()
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
