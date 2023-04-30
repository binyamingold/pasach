// Write a JavaScript program to create an array with the first n elements of the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones,
// usually starting with 0 and 1.
// For example, the first 6 elements of the Fibonacci sequence are [0, 1, 1, 2, 3, 5].

var number = prompt('Please type a number')


function fibonacci(UserNumber) {
    let i= 0;
    let j = 1;
    fibonacciArray = [0,1]
    for (let index = 1; index <= UserNumber; index++) {
        if (i < j){
            i = i + j;
            fibonacciArray.push(i)
        } 
        else{
            j = i + j
            fibonacciArray.push(j)
        }
    }
    console.log(fibonacciArray);    
}

fibonacci(number)
