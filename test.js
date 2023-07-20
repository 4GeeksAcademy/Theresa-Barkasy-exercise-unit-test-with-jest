// import the function sum from the app.js file
const {sum} = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14,9);

    //we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 139.57 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    //use the function like it's supposed to be used
    const yen = fromDollarToYen(3.5)

    //if 1 dollar is 139.57 yen, then 3.5 dollars should be =
    expect(fromDollarToYen(3.5)).toBe(488.495);
})

test("One yen should be 0.0055 pounds", function(){
    //import the function from app.js
    const {fromYenToPound} = require('./app.js')

    //yse the function like it's supposed to be used
    const pound = fromYenToPound(3.5)

    //if 1 yen is 0.0055 pounds, then 3.5 yen should be =
    expect(fromYenToPound(3.5)).toBe(0.01925);
})