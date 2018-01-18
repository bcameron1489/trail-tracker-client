'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const apiTrails = require('./api/trails-api.js')
const uiTrails = require('./ui/trails-ui.js')
const breck = require('./templates/Breck-map.hbs')
const park = require('./templates/park-city-map.hbs')
const big = require('./templates/big-sky-map.hbs')
const vail = require('./templates/vail-map.hbs')

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
    .then(apiTrails.getTrails)
    .then(uiTrails.onGetTrailsSuccess)
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

const loginView = function () {
  $('.content-btn').hide()
  $('.user-button').hide()
}

const hidePostAuthForms = function () {
  $('.post-auth-forms').hide()
}

// const defaultView = function () {
//   $('.full-body').hide('')
// }

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

const onShowImage = function (event) {
  if ($(event.target).attr('data-mountain') === 'Breck') {
    $('.user-tracker-view').html('')
    $('.user-tracker-view').append(breck)
  } else if ($(event.target).attr('data-mountain') === 'Park City') {
    $('.user-tracker-view').html('')
    $('.user-tracker-view').append(park)
  } else if ($(event.target).attr('data-mountain') === 'Big Sky') {
    $('.user-tracker-view').html('')
    $('.user-tracker-view').append(big)
  } else if ($(event.target).attr('data-mountain') === 'Vail') {
    $('.user-tracker-view').html('')
    $('.user-tracker-view').append(vail)
  } else {
    $('.user-tracker-view').html('Whoops... Trail not found')
  }
}

loginView()
hidePostAuthForms()

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.home-btn').on('click', showHome)
  $('.user-tracker-btn').click('show-button', onShowImage)
}

module.exports = {
  onSignUp,
  onSignOut,
  onChangePassword,
  addHandlers
}
