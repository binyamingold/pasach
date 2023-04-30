//שאלה 1 מערכים

let wordsArr = ['hii', 'bus', 'good', 'abba']

function reverseSort(arr) {
    return arr.sort((a,b)=> b.localeCompare(a));
}
console.log(reverseSort(wordsArr));

//שאלה 2 מערכים

let numbersArr = [1,2,3,4,5,6,7,8]

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0)
} 
console.log(getEvenNumbers(numbersArr));

//שאלה 3 מערכים

//let wordsArr = ['hello', 'world', 'javascript']

function getStringLengths(arr) {
  return arr.map(str => str.length);
}
console.log(getStringLengths(wordsArr));

//שאלה 4 מערכים

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}
  
console.log(doubleNumbers(numbersArr));

//שאלה 5 מערכים

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
console.log(sumArray(numbersArr));

//שאלה 6 מערכים

function sortWords(arr) {
    return arr.sort();
}
  
const words = ['banana', 'apple', 'cherry', 'date'];
console.log(sortWords(words)); 


// שאלה 7 מערכים

function removeDuplicates(arr) {
    const newArr = [];
    arr.forEach(item => {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    });
    return newArr;
  }
console.log(removeDuplicates(numbersArr));

// שאלה 8 מערכים

function multiplyArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}

console.log(multiplyArray(numbersArr));

// שאלה 9 מערכים

function filterOddNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);
}

console.log(filterOddNumbers(numbersArr));

// שאלה 10 מערכים

function findMin(arr) {
    return arr.reduce((min, current) => Math.min(min, current));
}

console.log(findMin(numbersArr));

//שאלה 11 מערכים 

function sortStringsByLength(arr) {
    return arr.sort(function(a, b) {
      return a.length - b.length;
    });
}

const sortArr = ['banana', 'apple', 'cherrys', 'date'];
console.log(sortStringsByLength(sortArr));

// שאלה 12 מערכים

function countEvenNumbers(arr) {
    let count = 0;
    arr.forEach(num => {
      if (num % 2 === 0) {
        count++;
      }
    });
    return count;
}

console.log(countEvenNumbers(numbersArr))

// שאלה 13 מערכים

function filterObjectsByAge(people) {
    return people.filter(obj => obj.age >= 18);
  }
  
  
  const people = [
     {
       "name": "John Smith",
       "age": 35,
       "isMarried": true,
     },
     {
       "name": "Jane Doe",
       "age": 28,
       "isMarried": false,
     },
     {
       "name": "aaa Doe",
       "age": 12,
       "isMarried": false,
     },
   ];
  console.log(filterObjectsByAge(people));

  // שאלה 14 מערכים

  function squareArray(arr) {
    return arr.map(num => Math.pow(num, 2));
}

const squaredArr = squareArray(numbersArr);
console.log(squaredArr); 

// שאלה 15 מערכים

function filterWordsStartingWithA(arr) {
    return arr.filter(word => word.toLowerCase().startsWith('a'));
  }
  
  // Example usage:
  const filterArr = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];
  const filteredArr = filterWordsStartingWithA(filterArr);
  console.log(filteredArr); // Output: ['apple', 'avocado', 'apricot']