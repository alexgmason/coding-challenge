function parse (input) {
  [gridInput, ...shipsInput] = input

  return {
    gridInput,
    shipsInput
  }
}

module.exports = parse