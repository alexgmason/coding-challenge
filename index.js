const input = require('./input')
const parse = require('./parse')

const Grid = require('./Grid')
const Ship = require('./Ship')

function getInput() {
  input()
  .then(result => {
    try{
      const {gridData, shipsData} = parse(result)

      // Create a new line to seperate input from the output
      console.log('\n')
  
      // Create a grid of the correct size
      const grid = new Grid(gridData.width, gridData.height)
  
      // Loop through each ship and run it's instructions
      shipsData.forEach((shipData, i) => {
        const ship = new Ship(shipData.coordinates, shipData.instructions, grid)
  
        ship.run()
      })
    } catch (error) {
      console.log(error.message)
    }
  })
}

getInput()