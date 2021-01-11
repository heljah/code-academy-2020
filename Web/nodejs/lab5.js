/* // erilaiset stringit:

let x = "hello"
let y = 'hello'
let z = `hello`

x = x + " täällä voi käyttää '' -merkkejä "
y = y + ' täällä voi käyttää "" -merkkejä '
z = z + ` täällä voi käyttää dollarimuuttujia, kuten x: ${x}`

console.log({ x }, { y }, { z })
*/
// print process.argv
let muuttuja = Number(process.argv[2]) + Number(process.argv[3])
console.log(muuttuja)

process.argv.forEach((val, index) => {
  console.log(`${index} + ${val}`);
});
/* 
for (let i = 0; i < 10; i++) {
  console.log(i + 1)
}
for (let j = 0; j < 10; j++) {
  console.log(10 - j)
} */

const autot = ['opel', 'ford', 'nissan', 'kia']
for (const auto of autot) {
  console.log(auto)
}
for (let i = 0; i < autot.length; i++) {
    const element = autot[i];
    console.log(element)
}

