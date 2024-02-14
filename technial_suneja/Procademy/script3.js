/*****************************************************************
 *
 *
 *                   SPREAD OPERATOR IN JS
 *
 *
 *
 *****************************************************************/

// THE SPREAD OPERATOR TAKES IN AN ITTERABLE (EG AN ARRAY OR STRING) AND EXPANDS
//IT INTO INDIVISUAL ELEMENTS

// Here are the main differences:

// The spread operator (...) unpacks the elements of an iterable object.
// The rest parameter (...) packs the elements into an array.

let arr = [1, 2, 3, 4, 5];
// console.log(arr[0],arr[1],arr[2])
console.log(...arr); // logs out each element in the console separately - 1,2

//EXPANDING THE STRING

let str = "hello";
console.log(...str);

// USECASE 1: COPYING ARRAY INTO ANOTHER ARRAY
let newArr = [10, 20, 30, ...arr];
console.log(newArr);

// USECASE 2: PASSING THE ELEMENT OF AN ARRAY AS ARGUMENT

function sum(a, b, c) {
  return a + b + c;
}
let totalSum = sum(...arr);
console.log(totalSum);

// USECASE 3: COMBINING 2 OR MORE ARRAY IN SINGLE ARRAY
let arr2 = [6, 7, 8];
let arr3 = [9, 10, 11];

let arr4 = [...arr, ...arr2, ...arr3];

console.log(arr4);

// https://www.javascripttutorial.net/es6/javascript-spread/
