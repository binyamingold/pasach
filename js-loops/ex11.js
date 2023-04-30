// Write a JavaScript program to find the smallest common multiple (SCM) of two numbers.
// The smallest common multiple is the smallest number that is a multiple of both input numbers.
// For example, the smallest common multiple of 4 and 6 is 12.

//var number = prompt('Please type a number')
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

function reverseString(n1,n2){

// higher number among number1 and number2 is stored in min
let min = (n1 > n2) ? n1 : n2;

// while loop
while (true) {
    if (min % n1 == 0 && min % n2 == 0) {
        console.log(`The LCM of ${n1} and ${n2} is ${min}`);
        break;
    }
    min++;
}
}

reverseString(num1, num2);

