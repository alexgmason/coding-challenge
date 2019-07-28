function Grid(width, height) {
  this.width = width
  this.height = height
  this.bannedPositions = []
}


/**
 * Check whether a given position is on the grid
 * @param {number} x - The X coordinate we are checking
 * @param {number} y - The Y coordinate we are checking
 * @return {boolean} - Whether the given x,y position is on the grid or not
 */
Grid.prototype.checkPositionIsOnGrid = function(x, y) {
  if (x > this.width || y > this.height || x < 0 || y < 0) {
    return false
  }

  return true
}

/**
 * Check whether a given position is aleady banned
 * @param {number} x - The X coordinate we are checking
 * @param {number} y - The Y coordinate we are checking
 * @return {boolean} - Whether the given x,y position is banned or not
 */
Grid.prototype.checkPositionNotBanned = function(x, y) {
  const positionString = x.toString() + y.toString()

  return !this.bannedPositions.some(position => {
    return position === positionString
  })
}

/**
 * Add a position to our array of banned positions
 * @param {number} x - The X coordinate we are banning
 * @param {number} y - The Y coordinate we are banning
 */
Grid.prototype.addBannedPosition = function(x, y) {
  const posString = `${x}${y}`
  if (this.bannedPositions.indexOf(`${x}${y}`) === -1) {
    this.bannedPositions.push(`${x}${y}`)
  }
}

module.exports = Grid