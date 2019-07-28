const VALID_DIRECTIONS = require('../validDirections.js')

function Ship(coordinates, instructions, grid) {
  this.x = parseInt(coordinates[0])
  this.y = parseInt(coordinates[1])
  this.direction = coordinates[2]
  this.grid = grid
  
  this.instructions = instructions
}

/**
 * Iterate over a ships instructions
 */
Ship.prototype.run = function() {
  this.instructions.forEach(function (instruction) {
    this.performInstruction(instruction, this.x, this.y)
  }.bind(this))

  console.log(`SHIP OUTPUT: ${this.x < this.grid.width ? this.x : this.grid.width} ${this.y < this.grid.height ? this.y : this.grid.height} ${this.direction} ${this.lost ? 'LOST' : ''}`)
}

/**
 * Change the direction of a ship
 * @param {number} - A number representing a turn to the left or right '1' is a turn to the right
 * '-1 to the left
 */
Ship.prototype.changeDirection = function(direction) {
  // Get the position in the array of the current direction
  const currentDirectionIndex = VALID_DIRECTIONS.indexOf(this.direction)
  // Find our new direction by adding the direction argument to the current direction index
  // Here we assume direction argument will be either 1 or -1
  const newDirectionIndex = currentDirectionIndex + direction

  if (newDirectionIndex > VALID_DIRECTIONS.length -1) {
    // When we reach the end of the valid directions array we jump back to the start
    this.direction = VALID_DIRECTIONS[0]
  } else if (newDirectionIndex < 0) {
    // When we reach the beginning of the valid directions array we jump back to the end
    this.direction = VALID_DIRECTIONS[VALID_DIRECTIONS.length -1]
  }
  else {
    this.direction = VALID_DIRECTIONS[newDirectionIndex]
  }
}

/**
 * Perform an instruction upon a ship
 * @param {string} - A string containing an instruction for a ship
 */
Ship.prototype.performInstruction = function(instruction) {
  console.log('instruction', instruction)
  switch(instruction) {
    case 'R':
      console.log('Changing direction right')
      
      this.changeDirection(1)
      break
    case 'L':
      console.log('Changing direction left')

      this.changeDirection(-1)
      break
    case 'F':
      console.log('@TODO Move forward here')
      break
  }

  return 
}

module.exports = Ship