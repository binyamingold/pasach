// Write a JavaScript program to reverse a given string.
// For example, if the input is "hello", the output should be "olleh". 

var word = prompt('Please type a word')


function reverseString(reverseWord){
    
    var splitString = reverseWord.split(""); 

    var reverseArray = splitString.reverse(); 
    console.log(reverseArray)

    var joinArray = reverseArray.join(""); 
    console.log(joinArray)
}

reverseString(word);

