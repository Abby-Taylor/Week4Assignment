//use template literals to write a function that takes firstName and
//lastName and returns 'firstName and lastName'
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`};

console.log(printFullName('Abby', 'Taylor'));

//write the same function as above as an arrow function with a diff name
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Bob', 'Bobberson'));

//use setTimeout() function and create anonymous arrow function in callback
//position
setTimeout(() => {alert('Time is Up!'); }, 3000);

//write an arrow function named askAreWeThereYet that alerts 'Are we there
//yet?' use setInterval() and pass the function in callback parameter pos

function askAreWeThereYet() {
    alert ('Are we there yet?');
}
setInterval(askAreWeThereYet(), { alert }, 3000);

function processSplicedValue (array, index, callback) {
    let removedValue = array.splice(index, 1)
    callback(removedValue);
}
let strings = ['Tom', 'Bob', 'Joan', 'Jill'];

processSplicedValue(strings, 3, console.log);

//call again but pass alert function instead of console.log
processSplicedValue(strings, 2, alert);

//call processSplicedValue again pass anonymous arrow function that
//alerts 
processSplicedValue(strings, 2, (value) => {alert(value)});

//call processSplicedValue again pass in your own function that you create 
//and name

let newArray = [];

function createNewArray (value) {
    newArray.push(value)
    console.log(newArray);
};
processSplicedValue (strings, 2, createNewArray);
