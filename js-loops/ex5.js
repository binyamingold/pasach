// Write a JavaScript program to find the sum of all odd numbers from 1 to 1000.


function oddnum() {
    let i = 0
    let sum = 0
    while (i<1001) {
        if (i % 2 != 0) {
            sum += i;    
        }
        i++;
    }
    console.log(sum)   
}
oddnum()
