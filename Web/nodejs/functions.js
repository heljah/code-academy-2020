/* eslint-disable semi */
// Tässä harjoitellaan ihan vaan for in -loopia
/* const tina = {name: 'Tiina', age: 13};
for (const key in tina) {
    if (Object.hasOwnProperty.call(tina, key)) {
        console.log(tina[key]);
        
    }
} */

// Tässä luodaan olio ja siitä uusi instanssi
/* function Person(name, age) {
    this.name = name
    this.age = age
}

const tina = new Person('Tinde', 14);
console.log({tina}); */

// tässä luodaan max-funktio
/* const max = (a, b) => { return (a > b ? a : b); }

console.log( max(6,2) );
 */

// tässä funktio, joka saa parametrinä funktion
/* const isPositiveInteger = (value, onSuccess, onError) => {
    if (value >= 0) onSuccess();
    else onError();
}

const success = () => console.log('positiivinen');
const error = () => console.log('negatiivinen');

isPositiveInteger(3, success, error);
isPositiveInteger(-19, () => console.log('pos'), () => console.log('neg')); */

// Tässä tehdään repeat-funktio ja käytetään default argumenttia
/* const repeat = (tervehdys, times = 1) => {
    let morotus = '';
    for (let i = 0; i < times; i++) {
        morotus += tervehdys;
    }
    return morotus;
}
console.log(repeat("moi")) // outputs "moi"
console.log(repeat("moi", 4)) // outputs "moimoimoimoi"
*/

// typeof ja instanceof -operaattorit
/* function doIt () {
    console.log('hello')
}
// doIt on funktio, siksi tämä tulostaa function
console.log(typeof doIt)
// doIt on funktion instanssi ja instanceof on operaattori, joka testaa sen, siksi tulostuu true
console.log(doIt instanceof Function) */

/* // testataan call-funktiota
var myFunc = new Function('', 'console.log("hello")')
// call-funktio kutsuu myFunc-functiota, eli sama kutsu kuin myFunc()
myFunc.call()
 */

/* // Tehtävänanto: tee funktio doIt käyttäen arguments-muuttujaa
function doIt(a, b, c) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);        
    }
}
doIt("a");  // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc */

/* // Tehtävänanto: f() should output 'hello world'
const doIt = () => {
    const f = () => console.log('hello world');
    return f;
}

let f = doIt()
f() */

// makeAdder-funktio käyttää edellä olevaa funktio funktion sisällä mallia
const makeAdder = (addition) => (value) => value + addition

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12
