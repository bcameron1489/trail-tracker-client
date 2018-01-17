'use strict'
const store = require('./store')

const showHome = function () {
  $('.user-tracker-view').hide()
  $('.user-tracker-btn').hide()
  $('.user-tracker-view').html('')
  $('.user-tracker-btn').html('')
  $('.content').show()
  $('.user-content').show()
  $('.trail-forms').show()
  $('.tracker-forms').show()
  $('.auth-response').text('Check out our trails!')
}

// hide/show content callbacks

const preAuthContent = function () {
  $('.auth-wrapper').hide()
}

const showPreAuthContent = function () {
  $('.auth-wrapper').show()
}

const showPostAuth = function () {
  $('.post-auth-forms').show()
  $('.content-btn').show()
  $('.user-button').show()
  $('.content').show()
  $('.user-content').show()
}

const hidePostAuth = function () {
  $('.post-auth-forms').hide()
  $('.content-btn').hide()
  $('.user-button').hide()
  $('.content').html('')
  $('.user-content').html('')
  $('.user-tracker-view').html('')
  $('.user-tracker-view').hide()
  $('user-tracker-btn').hide()
}

// ui response
const onSignUpSuccess = function () {
  $('.auth-response').html('Thank you for signing up!')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  $('.auth-response').html('There was a problem. Please try again.')
  $('.signup').val('')
}

const onSignInSuccess = function (data) {
  showPostAuth()
  preAuthContent()
  showHome()
  $('.auth-response').html('Welcome back ' + data.user.email + '!')
  $('.input').val('')
  store.user = data.user
}

const onSignInFailure = function (data) {
  $('.auth-response').html('Sign in failure. Please try again.')
  $('.input').val('')
}

const onSignOutSuccess = function (data) {
  $('.content').html('')
  $('.user-content').html('')
  $('.auth-response').html('You have signed out!')
  $('.input').val('')
  showPreAuthContent()
  hidePostAuth()
}

const onSignOutFailure = function (data) {
  $('.auth-response').html('Sign out failure.')
}

const onChangePasswordSuccess = function () {
  $('.auth-response').html('Password change successful!')
  $('.input').val('')
}

const onChangePasswordFailure = function () {
  $('.auth-response').html('Failed to change password. Please try again.')
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
