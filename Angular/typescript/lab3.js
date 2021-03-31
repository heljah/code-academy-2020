/* // A type excercise
let a: boolean = true;
let b: number = 24
let c: number = 9.4
let d: string = "hello"

console.log(a, typeof a)
console.log(b, typeof b)
console.log(c, typeof c)
console.log(d, typeof d) */
function calculate(input) {
    var tulos;
    var a, b;
    a = input[0];
    b = input[2];
    var valimerkki;
    valimerkki = input[1];
    if (valimerkki === "+")
        tulos = a + b;
    else if (valimerkki === "-")
        tulos = a - b;
    console.log("Tulos on: ", tulos);
}
var userinput = process.argv;
userinput.splice(0, 2);
console.log(userinput);
var number1 = +userinput[0];
var number2 = +userinput[2];
calculate([number1, userinput[1], number2]);
