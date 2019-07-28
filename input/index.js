const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ask () {
  return new Promise((resolve, reject) => {
    try {
      let input = []
    
      console.log('Please type or paste your input. Type \'done\' when you are finished: ')
  
      // When a new line is added we push that string onto our array
      rl.on('line', function (cmd) {
        if (cmd === 'done') {
          rl.close()
        } else {
          input.push(cmd)
        }

      })
      
      rl.on('close', function () {
        resolve(input)
      })
    } catch (error) {
      reject (error)
    }
  })
}

async function input() {
  return await ask()
}

module.exports = input