'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const home = require('./templates/home-view.hbs')
const breck = require('./templates/Breck-map.hbs')
const park = require('./templates/park-city-map.hbs')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const postAuthForms = function () {
  $('.post-auth-forms').hide()
}

// const defaultView = function () {
//   $('.full-body').hide('')
// }

const showHome = function () {
  $('.user-tracker-view').hide()
  $('.content').show()
  $('.user-content').show()
  $('.trail-forms').show()
  $('.tracker-forms').show()
}

const onShowImage = function (event) {
  if ($(event.target).attr('data-mountain') === 'Breck') {
    $('.user-tracker-view').val()
    $('.user-tracker-view').append(breck)
  } else if ($(event.target).attr('data-mountain') === 'Park City') {
    $('.user-tracker-view').val()
    $('.user-tracker-view').append(park)
  } else {
    console.log('failed or nadda')
  }
}

postAuthForms()

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.home-btn').on('click', showHome)
  $('.user-tracker-view').click('show-button', onShowImage)
}

module.exports = {
  onSignUp,
  onSignOut,
  onChangePassword,
  addHandlers
}
