'use strict'

class model {
  constructor(words, option) {
    ;(this.words = words), (this.option = option)
  }
  select() {
    switch (this.option) {
      case 'reverse':
        return this.words.split('').reverse().join('')

      case 'toUpperCase':
        return this.words.toUpperCase()

      case 'toLowerCase':
        return this.words.toLowerCase()

      default:
        return this.words
    }
  }
  show() {
    const p = document.createElement('p'),
      body = document.body
    p.innerHTML = this.select()
    body.append(p)
  }
}

export default model
