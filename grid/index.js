function Grid(width, height) {
  this.width = width
  this.height = height
}

Grid.prototype.checkPositionIsOnGrid = function(x, y) {
  if (x > this.width || y > this.height) {
    return false
  }

  return true
}

module.exports = Grid