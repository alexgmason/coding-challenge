function Grid(width, height) {
  this.width = width
  this.height = height
  this.bannedPositions = []
}

Grid.prototype.checkPositionIsOnGrid = function(x, y) {
  if (x > this.width || y > this.height) {
    return false
  }

  return true
}

Grid.prototype.checkPositionNotBanned = function(x, y) {
  const positionString = x.toString() + y.toString()

  return !this.bannedPositions.some(position => {
    return position === positionString
  })
}

Grid.prototype.addBannedPosition = function(x, y) {
  const posString = `${x}${y}`
  if (this.bannedPositions.indexOf(`${x}${y}`) === -1) {
    this.bannedPositions.push(`${x}${y}`)
  }
}

module.exports = Grid