// Write a JavaScript program to display the multiplication table of a number entered by the user.
// For example, if the user enters 5, display the multiplication table for 5.

var number = prompt('Please type a number')
console.log(number)

multiplicationTable(number)

function multiplicationTable(UserNumber) {
    var i = 0;
    var j = 0;
    var multiTable = []

    for (i = 1; i <= UserNumber; i++) {
    var row = {};
    for (j = 1; j <= UserNumber; j++) {
        // var res = i * j;
        row[j] = i * j;
    }
    row[' '] = i;
    multiTable.push(row);
    }
    console.table(multiTable);    
}


