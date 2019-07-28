const VALID_DIRECTIONS = require('../../validDirections.js')
const VALID_INSTRUCTIONS = require('../../validInstructions.js')

/**
 * Validate that a ships direction is valid
 * @param {string} direction - The direction string that we are validating
 */
function isValidDirection(direction) {
  return VALID_DIRECTIONS.indexOf(direction) > -1
}

/**
 * Validate that a ships instruction is valid
 * @param {string} instruction - The instruction string that we are validating
 * @return {boolean} Whether or not the instruction is valid
 */
function isValidInstruction(instruction) {
  return VALID_INSTRUCTIONS.indexOf(instruction) > -1
}

/**
 * Validate ship coordinates input
 * @param {array} input - The coordinates input to validate
 * @param {object} gridData - The gridData object containing width and height properties for the grid
 */
function coordinates(input, gridData) {
  // Check coordinates is an array
  if (!Array.isArray(input)) {
    throw new Error ('Ship coordinates should be an array')
  }

  // Check our ships coordinates array has a length of 3
  if (input.length !== 3) {
    throw new Error ('Ship coordinates should have a length of 3')
  }

  if (typeof parseInt(input[0]) !== 'number') {
    throw new Error ('First item in ship coordinates should be a number')
  }

  if (typeof parseInt(input[1]) !== 'number') {
    throw new Error ('Second item in ship coordinates should be a number')
  }

  if (parseInt(input[0]) > gridData.width) {
    throw new Error ('First item in ship coordinates should not be bigger than the grid\'s width')
  }

  if (parseInt(input[1]) > gridData.height) {
    throw new Error ('First item in ship coordinates should not be bigger than the grid\'s height')
  }

  if (!isValidDirection(input[2])) {
    throw new Error ('Ships starting direction is not valid. Must be one of ' + VALID_DIRECTIONS.join(' '))
  }
}

/**
 * Validate ship instructions input
 * @param {array} input 
 * @return {boolean} Whether or not the instructions are valid
 */
function instructions(input) {
    // Check instructions is an array
    if (!Array.isArray(input)) {
      throw new Error ('Ship instructions should be an array')
    }

    // Check ship instructions are less than 100 characters
    if(input.length > 99) {
      throw new Error ('Ship instructions should be less than 100 characters in length')
    }


    // Check each of our instructions is valid
    input.forEach(line => {
      if (!isValidInstruction(line)) {
        throw new Error ('Ship instructions are invalid. Must be one of ' + VALID_INSTRUCTIONS.join(' '))
      }
    })
}

module.exports = {
  coordinates,
  instructions
}