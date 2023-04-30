// Write a JavaScript program to print the numbers from 1 to 50.
// But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

let numbers = [1,2,3,4,5,6,7,8,9,10]

function print() {
    for (let index = 1; index < 51; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (index % 3 === 0) {
            console.log('Fizz');
        }
        else if (index % 5 === 0) {
            console.log('Buzz')
        }
        else{
            console.log(index)
        }
       
    }
}

print()
