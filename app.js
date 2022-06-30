let oneEuroIs = { // one euro is:
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){ // we declare the function with the exact name "fromEuroToDollar"
    let valueInDollar = valueInEuro * 1.2;     // convert the given valueInEuro to dollars
    return valueInDollar;     //return the Dollar value
}

const fromDollarToYen = function(valueInYen){ // we declare the function with the exact name "fromDollarToYen"
    let valueInYen = valueInYen * 127.9;     // convert the given valueInDollar to Yen
    return valueInYen;     //return the Yen value
}

const fromYenToPound = function(valueInYen){ // we declare the function with the exact name "fromYenToPound"
    let valueInYen = valueInPound * 0.8;     // convert the given valueInYen to Pounds
    return valueInYen;     //return the yen value
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


/* ------- */

