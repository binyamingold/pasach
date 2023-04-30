// Write a JavaScript program to print the even numbers between 1 and 20 using a for loop.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function evenNumber(numArray){
    for (var i=0; i<numArray.length ;i++){
        if (numArray[i] % 2 == 0){
            console.log(numArray[i]);
        }
    }
}

evenNumber(numbers);

