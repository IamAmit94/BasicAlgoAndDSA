// 01. push(element1, ..., elementN): Adds one or more elements to the end of an array.
// SYNTAX
// array.push(element1, element2, ..., elementN);

let fruits = ['apple', 'orange', 'banana'];

// Adding a new element to the end of the array
let newLength = fruits.push('grape');

console.log(fruits);    // Output: ['apple', 'orange', 'banana', 'grape']
console.log(newLength); // Output: 4



// 02. pop(): Removes the last element from an array and returns that element.
// SYNTAX let removedElement = array.pop();


let fruits2 = ['apple', 'orange', 'banana'];

// Removing the last element from the array
let removedFruit = fruits2.pop();

console.log(fruits2);       // Output: ['apple', 'orange']
console.log(removedFruit); // Output: 'banana'


// 03. shift(): Removes the first element from an array and returns that element.
// SYNTAX let removedElement = array.shift();

let fruits4 = ['apple', 'grape', 'orange', 'banana'];

// Removing the first element from the array
let removedFruit3 = fruits.shift();

console.log(fruits4);       // Output: ['grape', 'orange', 'banana']
console.log(removedFruit3); // Output: 'apple'




// 04. unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array.
// SYNTAX array.unshift(element1, element2, ..., elementN);

let fruits3 = ['orange', 'banana'];

// Adding new elements to the beginning of the array
let newLength2 = fruits3.unshift('apple', 'grape');

console.log(fruits3);    // Output: ['apple', 'grape', 'orange', 'banana']
console.log(newLength2); // Output: 4


// 05. concat(array2, ..., arrayN): Combines two or more arrays.
//SYNTAX let newArray = array1.concat(array2, array3, ..., arrayN);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = arr1.concat(arr2);

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


// 06. splice(start, deleteCount, item1, ..., itemN): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
//SYNTAX array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

let colors = ['red', 'green', 'blue'];

// Adding elements at a specific index
colors.splice(1, 0, 'yellow', 'purple');

console.log(colors); // Output: ['red', 'yellow', 'purple', 'green', 'blue']


// 07. slice(start, end): Returns a shallow copy of a portion of an array.
//SYNTAX  let newArray = array.slice(startIndex, endIndex);
let numbers = [1, 2, 3, 4, 5];

// Creating a new array from index 1 to index 3
let slicedArray = numbers.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]



// 08. indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
//SYNTAX let index = array.indexOf(element, startIndex);
let fruits11 = ['apple', 'banana', 'orange', 'banana'];

// Finding the index of 'banana'
let bananaIndex = fruits11.indexOf('banana');

console.log(bananaIndex); // Output: 1



// 09. lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
//SYNTAX  let lastIndex = array.lastIndexOf(element, startIndex);
let fruits12 = ['apple', 'banana', 'orange', 'banana'];

// Finding the last index of 'banana'
let lastBananaIndex = fruits12.lastIndexOf('banana');

console.log(lastBananaIndex); // Output: 3



// 10. includes(element, fromIndex): Determines whether an array includes a certain element, returning true or false as appropriate.
//SYNTAX  let includesElement = array.includes(element, startIndex);

let fruits13 = ['apple', 'banana', 'orange', 'banana'];

// Checking if 'orange' is included in the array
let includesOrange = fruits13.includes('orange');

console.log(includesOrange); // Output: true