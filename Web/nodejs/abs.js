const readlineSync = require('readline-sync')
const abs = (number) => {
    const absolute = Math.abs(number)
    console.log(absolute)
}

const number = readlineSync.question('May I have your number? ')

abs(number)
