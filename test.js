// import the function sum from the app.js file
const { sum, fromEuroToDollar } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => { //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    expect(total).toBe(23); // we expect the sum of those 2 numbers to be 23

});

test("One dollar should be 106.5 Yen", () => {
    const { fromDollarToYen } = require('./app.js')
    const yenFromDollar = fromDollarToYen(1);
    const expected = (1 / 1.2) * 127.9;
    expect(yenFromDollar.toBe(expected)); 
});

test("One Yen should be 0.0061 Pounds", () => {
    const { fromYenToPounds } = require('./app.js')
    const poundsFromYen = fromYenToPounds(1);
    const expected = (1 / 1.2) * 127.9;
    expect(poundsFromYen.toBe(expected)); 
});

test("One euro should be 1.206 dollars", function () {
    const { fromEuroToDollar } = require('./app.js')     //import the function from app.js
    const dollars = fromEuroToDollar(3.5)     // use the function like its supposed to be used
    const expected = 3.5 * 1.2;     // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});