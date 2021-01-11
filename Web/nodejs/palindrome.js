const readlineSync = require('readline-sync')
let isPalindrome = true;

const candidate = readlineSync.question('May I have your word? ')
for (let i = 0; i < candidate.length; i++) {
    const alkuvastine = candidate[i];
    const loppuvastine = candidate[candidate.length - i - 1]
    if (alkuvastine === loppuvastine) {
        isPalindrome = true
    } else {
        isPalindrome = false
        break
    }
}
console.log('Your word is a palindrome: ' + isPalindrome);