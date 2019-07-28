const input = require('./input')
const parse = require('./parse')

const Grid = require('./Grid')
const Ship = require('./Ship')

function getInput() {
  input()
  .then(result => {
    console.log('result', result)

    const {gridData, shipsData} = parse(result)

    console.log('gridData', gridData)
    console.log('shipsData', shipsData)

    // Create a grid of the correct size
    const grid = new Grid(gridData.width, gridData.height)

    console.log('grid', grid)

    // Loop through each ship and run it's instructions
    shipsData.forEach((shipData, i) => {
      const ship = new Ship(shipData.coordinates, shipData.instructions, grid)

      ship.run()
    })

    
  })
}

getInput()