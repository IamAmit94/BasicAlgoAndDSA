// 11. filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
//SYNTAX array.filter(callback(element, index, array), thisArg);
// element: The current element being processed in the array.
// index :The index of the current element being processed in the array.
// array: The array filter() was called upon.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

/** ############################################################################################################################ */

// 12. map(callback): Creates a new array populated with the results of calling a provided function on every element in the array.
//SYNTAX  array.map(callback(element, index, array), thisArg);
let numbers2 = [1, 2, 3, 4, 5];

// Double each number using map
let doubledNumbers = numbers2.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/** ############################################################################################################################ */


// 13. forEach(callback): Executes a provided function once for each array element.
//SYNTAX array.forEach(callback(currentValue, index, array), thisArg);
let fruits = ['apple', 'banana', 'orange'];

// Log each fruit using forEach
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// orange

/** ############################################################################################################################ */

// 14. reduce(callback, initialValue): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//SYNTAX array.reduce(callback(accumulator, currentValue, index, array), initialValue);
let numbers3 = [1, 2, 3, 4, 5];

// Sum all numbers using reduce
let sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

/** ############################################################################################################################ */



// 15. reduceRight(callback, initialValue): Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.
//SYNTAX array.reduceRight(callback(accumulator, currentValue, index, array), initialValue);
let words = ['This', 'is', 'a', 'sentence'];

// Concatenate words from right to left using reduceRight
let sentence = words.reduceRight((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(sentence); // Output: sentence a is This

/** ############################################################################################################################ */


// 16. every(callback): Tests whether all elements in the array pass the test implemented by the provided function.
//SYNTAX array.every(callback(element, index, array), thisArg);
let numbers4 = [2, 4, 6, 8, 10];

// Check if all numbers are even using every
let allEven = numbers4.every(num => num % 2 === 0);

console.log(allEven); // Output: true

/** ############################################################################################################################ */


// 17. some(callback): Tests whether at least one element in the array passes the test implemented by the provided function.
//SYNTAX array.some(callback(element, index, array), thisArg);

let numbers5 = [1, 3, 5, 7, 8];

// Check if some numbers are even using some
let someEven = numbers5.some(num => num % 2 === 0);

console.log(someEven); // Output: true

/** ############################################################################################################################ */


// 18. find(callback): Returns the first element in the array that satisfies the provided testing function.
//SYNTAX array.find(callback(element, index, array), thisArg);
let numbers6 = [1, 3, 5, 7, 8];

// Find the first even number using find
let firstEven = numbers6.find(num => num % 2 === 0);

console.log(firstEven); // Output: 8

/** ############################################################################################################################ */


// 19. findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function.
//SYNTAX array.findIndex(callback(element, index, array), thisArg);

let numbers7 = [1, 3, 5, 7, 8];

// Find the index of the first even number using findIndex
let indexOfFirstEven = numbers7.findIndex(num => num % 2 === 0);

console.log(indexOfFirstEven); // Output: 4

/** ############################################################################################################################ */



// 20. reverse(): Reverses the elements of an array in place.
//SYNTAX  array.reverse();
let fruits1 = ['apple', 'banana', 'orange'];

// Reverse the order of fruits using reverse
fruits1.reverse();

console.log(fruits); // Output: ['orange', 'banana', 'apple']

/** ############################################################################################################################ */


// 21. sort(compareFunction): Sorts the elements of an array in place.
//SYNTAX array.sort(compareFunction);
let fruits8 = ['banana', 'apple', 'orange'];

// Sort fruits in alphabetical order using sort
fruits8.sort();

console.log(fruits); // Output: ['apple', 'banana', 'orange']

/** ############################################################################################################################ */



// 22. join(separator): Joins all elements of an array into a string.
//SYNTAX array.join(separator);
let fruits9 = ['apple', 'banana', 'orange'];

// Join fruits into a comma-separated string using join
let fruitString = fruits9.join(', ');

console.log(fruitString); // Output: 'apple, banana, orange'

/** ############################################################################################################################ */


// 23. toString(): Returns a string representing the array.
//SYNTAX   array.toString();
let fruits14 = ['apple', 'banana', 'orange'];

// Convert array to string
let fruitsString = fruits14.toString();

console.log(fruitsString); // Output: 'apple,banana,orange'

/** ############################################################################################################################ */


// 24. isArray(obj): Returns true if the object is an array, and false otherwise
//SYNTAX  Array.isArray(value);
let fruits15 = ['apple', 'banana', 'orange'];
let notArray = 'hello';

// Check if it's an array
console.log(Array.isArray(fruits15));   // Output: true
console.log(Array.isArray(notArray)); // Output: false

/** ############################################################################################################################ */