const validate = require('./validate')

/**
 * Trim and split a string, returning an array
 * @param {string} inputLine
 * @returns {array} - An array of instructions from a line
 */
function splitInput(inputLine, splitBy = ' ') {
  return inputLine.trim().split(splitBy)
}

/**
 * Separates ship instructions from each other. Delimited by an empty line
 * @param {array} inputLines - An array of strings containing two numbers representing the width and height of the grid
 * @return {array} - An array where each item contains a nested array of ships instructions
 */
function splitShips(inputLines) {
  let shipsData = [[]]
  inputLines.forEach(line => {
    // When a new line is reached we push a new empty (nested) array onto the array ready for the ships information.
    if (line === '') {
      shipsData.push([])
    } else {
      if (line.indexOf(' ') > 0) {
        shipsData[shipsData.length - 1].push(splitInput(line.toUpperCase()))
      } else {
        shipsData[shipsData.length - 1].push(splitInput(line.toUpperCase(), ''))
      }
    }
  })

  return shipsData
}


/**
 * Get instructions and beginning coordinates for each ship as an array of objects
 * @param {array} inputLines - An array of strings each containing coordinates and instructions for ships
 * @param {array} gridData - An array where each item contains an object with coordinates and instructions for each ship
 */
function getShipsData(inputLines, gridData) {
  const shipsData = splitShips(inputLines)

  shipsData.forEach(ship => {
    validate.ship.coordinates(ship[0], gridData)
    validate.ship.instructions(ship[1])
  })

  return shipsData.map(ship => {
    return {
      coordinates: ship[0],
      instructions: ship[1]
    }
  })
}

/**
 * Get the grids width and height from a string
 * @param {string} inputLine - A string containing two numbers representing the width and height of the grid
 * @return {{width: number, height: number}} - an object containing the parsed width and height of the grid
 */
function getGridData(inputLine) {
  let gridSize = splitInput(inputLine)
  gridSize = [parseInt(gridSize[0]), parseInt(gridSize[1])]

  validate.grid.size(gridSize)

  return {
    width: parseInt(gridSize[0]),
    height: parseInt(gridSize[1])
  }
}

/**
 * 
 * @param {array} input - An array of strings each containing a line from the input
 * @return {object} - An object containing two properties. The first gridData contains parsed information about the grid
 * The second shipsData contains parsed information about the ships.
 */
function parse (input) {
  [gridInput, ...shipsInput] = input

  const gridData = getGridData(gridInput)
  const shipsData = getShipsData(shipsInput, gridData)

  return {
    gridData,
    shipsData
  }
}

module.exports = parse