// Write a JavaScript program to find the factorial of a given positive integer.
// A factorial is the product of all the positive integers less than or equal to the given number.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

var number = prompt('Please type a number')


function factorial(UserNumber) {
    let sum = 1;
    for (let i = 1; i <= UserNumber; i++) {
        sum *= i
    }
    console.log(sum);    
}

factorial(number)
