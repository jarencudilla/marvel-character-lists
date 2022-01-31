const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Enter a Marvel Character:',  char => {
  console.log(`searching entries for ${char}`)
  readline.close()
})