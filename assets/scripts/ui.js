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
  $('.auth-response').text('Thank you for signing up!')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  $('.auth-response').text('There was a problem. Please try again.')
  $('.signup').val('')
}

const onSignInSuccess = function (data) {
  showContent()
  showPostAuth()
  preAuthContent()
  $('.auth-response').text('Welcome back ' + data.user.email + '!')
  $('.input').val('')
  $('.content').show()
  store.user = data.user
}

const onSignInFailure = function (data) {
  $('.auth-response').text('Sign in failure. Please try again.')
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  $('.auth-response').text('You have signed out!')
  $('.input').val('')
  hideContent()
  showPreAuthContent()
  hidePostAuth()
}

const onSignOutFailure = function (data) {
  $('.auth-response').text('Sign out failure.')
}

const onChangePasswordSuccess = function () {
  $('.auth-response').text('Password change successful!')
  $('.input').val('')
}

const onChangePasswordFailure = function () {
  $('.auth-response').text('Failed to change password. Please try again.')
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
