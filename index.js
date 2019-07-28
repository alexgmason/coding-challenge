const input = require('./input')
const parse = require('./parse')

function getInput() {
  input()
  .then(result => {
    console.log('result', result)

    const {gridInput, shipsInput} = parse(result)

    console.log('gridInput', gridInput)
    console.log('shipsInput', shipsInput)
  })
}

getInput()