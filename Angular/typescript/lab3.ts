/* // A type excercise
let a: boolean = true;
let b: number = 24
let c: number = 9.4
let d: string = "hello"

console.log(a, typeof a)
console.log(b, typeof b)
console.log(c, typeof c)
console.log(d, typeof d) */

/* // An array exercise
let ids: Array<number>;
ids = [23, 34, 100, 124, 44];
let biggest: number;
biggest = 0;
for (const i of ids) {
    if (i > biggest) {
        biggest = i
    }
}
console.log(biggest); */

/* // Another array exercise
let names: Array<string>;
names = ["kalle", "jeppe"];
let listItems: string;
listItems = names.map(name => `<li>${name}</li>`).join("")
console.log(names.map(name => `<li>${name}</li>`).join(""));
console.log(`<ul>${listItems}</ul>`); */

// A tuple exercise
type arr = [number, string, number];
function calculate(input: [number, string, number]) {
    let tulos: number;
    let a, b: number;
    a = input[0];
    b = input[2];
    let valimerkki: string;
    valimerkki = input [1];
    if (valimerkki === "+") tulos = a + b
    else if (valimerkki === "-") tulos = a - b
    console.log("Tulos on: ", tulos)
    
}

let userinput = process.argv;
userinput.splice(0, 2);
console.log(userinput);
let number1: number = +userinput[0]
let number2: number = +userinput[2]

calculate([number1, userinput[1], number2]);