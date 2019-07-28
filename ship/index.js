function Ship(coordinates, instructions, grid) {
  this.x = parseInt(coordinates[0])
  this.y = parseInt(coordinates[1])
  this.direction = coordinates[2]
  this.grid = grid
  
  this.instructions = instructions
}

module.exports = Ship