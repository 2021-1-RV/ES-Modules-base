'use strict'

import model from '../model/model.js'

const input = document.querySelector('input[type="text"]')
const select = document.querySelector('#option')
const button = document.querySelector('#submit')

button.addEventListener('click', addString)

function addString(evt) {
  evt.preventDefault() //предотвращение
  new model(input.value, select.value).show()
  input.value = ''
}
