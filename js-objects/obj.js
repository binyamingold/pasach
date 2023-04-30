// שאלה 1 אובייקטים

function Person(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.getFullName = function() {
    return this.firstName + " " + this.lastName;
}
}

// Example usage:
const person = new Person("John", "Doe", 30);
console.log(person.getFullName()); // Output: "John Doe"

// שאלה 2 אובייקטים

function countChars(str) {
let charCount = {};
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (charCount[char]) {
    charCount[char]++;
    } else {
    charCount[char] = 1;
    }
}
return charCount;
}

console.log(countChars("hwllo")); 

// שאלה 3 אובייקטים

function getValueByKey(obj, key) {

if (key in obj) {
    return obj[key];
} else {
    return null;
}
}

// Example usage:
const people = 
    {
    "name": "John Smith",
    "age": 35,
    "isMarried": true,
    };

console.log(getValueByKey(people,"pool")); 