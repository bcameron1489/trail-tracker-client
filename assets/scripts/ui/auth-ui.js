'use strict'
// const store = require('./store')

const onSignUpSuccess = function () {
  console.log('great success')
  $('.signup').val('')
}

const onSignUpFailure = function () {
  console.log('LOOOSER')
  $('.signup').val('')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
