const input = require('./input')
const parse = require('./parse')

function getInput() {
  input()
  .then(result => {
    console.log('result', result)

    const {gridData, shipsData} = parse(result)

    console.log('gridData', gridData)
    console.log('shipsData', shipsData)
  })
}

getInput()