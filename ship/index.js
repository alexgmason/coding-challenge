const VALID_DIRECTIONS = require('../validDirections.js')

function Ship(coordinates, instructions, grid) {
  this.lost = false
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

  this.logOutput()
}

/**
 * Log the position of a ship to the console
 */
Ship.prototype.logOutput = function() {
  const xPosition = this.x < this.grid.width ? this.x : this.grid.width
  const yPosition = this.y < this.grid.height ? this.y : this.grid.height

  console.log(`${xPosition} ${yPosition} ${this.direction} ${this.lost ? 'LOST' : ''}`)
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
 * Move the ship forward on the grid one position along its current direction
 */
Ship.prototype.moveForward = function() {
  let x = this.x
  let y = this.y

  switch(this.direction) {
    case 'N':
        y = y + 1
      break
    case 'E':
        x = x + 1
      break
    case 'S':
        y = y - 1
      break
    case 'W':
        x = x - 1
      break
  }

  this.moveToPosition(x, y)
}

/**
 * Move the ship to position on the grid
 * @param {number} - x = the X position to move to on the grid
 * @param {number} - y = the Y position to move to on the grid
 */
Ship.prototype.moveToPosition = function(x, y) {
  // Only make changes to the ships X or Y coordinates if the new coordinates are not banned
  if (this.grid.checkPositionNotBanned(x, y)) {
    // Check that our new X and Y positions are larger or equal to 0
    if (x >= 0 && y >= 0) {
      this.x = x
      this.y = y
    }

    // If the new position will cause the ship to fall off the grid we mark the ship as lost.
    // We also add the ships last position to a list of banned positions
    if (!this.grid.checkPositionIsOnGrid(x, y)) {
      this.lost = true
      this.grid.addBannedPosition(this.x, this.y)
    }
  }
}

/**
 * Perform an instruction upon a ship
 * @param {string} - A string containing an instruction for a ship
 */
Ship.prototype.performInstruction = function(instruction) {
  switch(instruction) {
    case 'R':
      this.changeDirection(1)
      break
    case 'L':
      this.changeDirection(-1)
      break
    case 'F':
      this.moveForward()
      break
  }

  return 
}

module.exports = Ship