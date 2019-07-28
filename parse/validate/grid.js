/**
 * Validate a grids data
 * @param {object} gridSize - The gridSize array containing width and height values indexed respectively 
 */
function size(gridSize) {
  // Check grid size array is an array
  if (!Array.isArray(gridSize)) {
    throw new Error ('Grid size should be an array')
  }

  // Check grid size array contains exactly 2 characters
  if (gridSize.length !== 2) {
    throw new Error ('Grid size should contain 2 parameters')
  }

  // Check both of the grid size array items are number
  if (typeof (gridSize[0] + gridSize[1]) !== 'number') {
    throw new Error ('Grid size should only contain numbers')
  }

  // Check both of the grid size array items are less than 50
  if (gridSize[0] > 50 || gridSize[1] > 50) {
    throw new Error ('Grid size should be less than 50 on either axis')
  }

  return true
}

module.exports = {
  size
}