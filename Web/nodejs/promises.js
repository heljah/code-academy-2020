
/* var sum = null

function makeCalculation () {
  console.log('2) calculating sum...')
  sum = 5 + 5
  console.log('3) sum is ' + sum)
  setTimeout(sendStuffToBackend, 1000)
}

function sendStuffToBackend () {
  console.log('4) sending ' + sum + ' to backends database')
  console.log('5) ending the calculation and sending')
}

console.log('1) starting the calculation and sending')
setTimeout(makeCalculation, 2000)

 */

function makeCalculation (a, b) {
    function asynFunc (resolve, reject) {
        setTimeout(() => {
            if (b != 0) {
                console.log('calculating stuff')
                const division = a / b
                resolve(division)
            } else {
                reject('cannot divide by zero')
            }
        }, 1000)
    }
    const p = new Promise(asynFunc)
    return p
}


function sendStuffToBackend (result) {
    function asynFunc (resolve, reject) {
        const random = Math.floor(Math.random() * 2)
        if (random === 0) {
            reject('failed to connect to backend')
        } else {
            setTimeout(() => {
                console.log(`sending to backend ${result}`)
                resolve('done')
            }, 1000)
        }
    }
    const p = new Promise(asynFunc)
    return p
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
makeCalculation(10, 2)
    .then(division => sendStuffToBackend(division))
    .then(msg => console.log(msg))
    .catch(errormsg => console.log(errormsg))
