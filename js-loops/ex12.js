// Write a JavaScript program to generate the first n prime numbers.
// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
// For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.

//var number = prompt('Please type a number')
const number = prompt('Enter a first positive integer: ');



function isPrime(n) {
		// Corner case
		if (n <= 1)
			return false;

		// Check from 2 to n-1
		for (let i = 2; i < n; i++)
			if (n % i == 0)
				return false;

		return true;
}


for (let index = 0; index < number; index++) {
    rez = isPrime(number)
    if (rez == true) {
        console.log(number);
    }
    else{
        console.log("not a prime number");
    }
    //rez == true ? console.log(number): console.log("not a prime number");
    
}

