////////////////////////////////////////////////////////
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
///////////////////////////////////////////////////////
console.log("setAlarm")

// declaring function setAlarm with arguements x and y 
const setAlarm = (x, y) => {
    // create an if statement checking if x and y === desired boolean values, then return
    if (x && y === false) {
        return true
    } else {
        return false
    }
}
console.log(setAlarm(true, true)) // => returns false
console.log(setAlarm(false, false)) // => returns false
console.log(setAlarm(false, true)) // => returns false
console.log(setAlarm(true, false)) // => returns true

////////////////////////////////////////////////////////
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
///////////////////////////////////////////////////////
console.log("Count Odd Numbers")

// declaring oddNumberCount with a single numerical arguement 
const oddNumberCount = (x) => {
    // create a counter
    let oddCount = 0
    // create for loop, i = test numbers
    for (i = 0; i < x; i++){
        // test if i is odd
        if (i % 2 === 1) {
            // add 1 to the counter if i is odd
            oddCount += 1
        }
    }
    // return the number of odd numbers
    return oddCount
}

console.log(oddNumberCount(7)) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
console.log(oddNumberCount(16)) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)

////////////////////////////////////////////////////////
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
///////////////////////////////////////////////////////
console.log("Disemvoweling Trolls")

// create function that removes all vowels
const trollsBeGone = (x) => 
// replace a,e,i,o,u with an empty string, with g (global) flag to target all instances rather than just the first, and i (ignore) flag for a case-INSENSITIVE *Can also target capital letters* search 
// read some stuff to find how to do this, namely https://www.javascripttutorial.net/javascript-string-replace/ && https://www.javascripttutorial.net/javascript-regular-expression/ 
x.replace(/[a,e,i,o,u]/gi, '')

console.log(trollsBeGone("This website is for losers LOL")) // => returns "Ths wbst s fr lsrs LL"

////////////////////////////////////////////////////////
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
///////////////////////////////////////////////////////
console.log("Bank Account Summary")

const bankInfo = {
    savings: 495,
    checking: -371,
    moneyMarket: 129,
    creaditCard: -2
}
// create func that calculates sum of all bank info
const bankAccountSummary = (x) => {
    // create sum of bank info variable
    let bankSum = 0
    // found the Object.values documentation
    Object.values(x).forEach(val => bankSum += val)
    // return bankSum
    return bankSum
}
// create bankTotal variable
let bankTotal = bankAccountSummary(bankInfo)

// in the red function
const inTheRed = (x) => {
    if (x < 0) {
        return true
    } else {
        return false
    }
}

console.log(inTheRed(bankTotal))

////////////////////////////////////////////////////////
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
///////////////////////////////////////////////////////
console.log("MadLibs")