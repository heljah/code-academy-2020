console.log('hello world!')

const generate = require('project-name-generator')
console.log(generate().dashed)

const readlineSync = require('readline-sync')

console.log(("" + Number("hello")).repeat(16) + " batman!")

const userName = readlineSync.question('May I have your name? ')
const number = readlineSync.question('give me a number')
let name = ''
for (let i = 0; i < number; i++) {
  name += userName
}
console.log('Hi ' + name + '!')

const operators = ['+', '-', '*']
const first = Number(readlineSync.question('Anna ensimmäinen numero: '))
const index = readlineSync.keyInSelect(operators, 'Which operator?')
const second = Number(readlineSync.question('Anna toinen numero: '))
let tulos = 0

const operator = operators[index]
if (operator === '+') {
  tulos = first + second
} else if (operator === '-') {
  tulos = first - second
} else if (operator === '/') {
  tulos = first / second
} else {
  tulos = first * second
}
console.log(first + operators[index] + second + '=' + tulos);

console.log('Ok, ' + tulos + ' goes to your room.')
