In JavaScript, understanding the concepts of deep copy and shallow copy is crucial when working with objects and arrays. Let's break down these concepts:
    
Shallow Copy:
A shallow copy creates a new object or array, but it does not create new copies of nested objects or arrays. Instead, it copies references to the nested objects or arrays. Therefore, changes made to nested objects or arrays in the copied structure will affect the original and vice versa.

1. Shallow Copy Examples:
# A) Using Spread Operator (for arrays):

const originalArray = [1, 2, [3, 4]];

// Shallow copy using spread operator
const shallowCopyArray = [...originalArray];

shallowCopyArray[2][0] = 99;

console.log(originalArray);       // [1, 2, [99, 4]]
console.log(shallowCopyArray);   // [1, 2, [99, 4]]


# B) Using Object.assign (for objects):
const originalObject = { a: 1, b: { c: 2 } };

// Shallow copy using Object.assign
const shallowCopyObject = Object.assign({}, originalObject);

shallowCopyObject.b.c = 99;

console.log(originalObject);       // { a: 1, b: { c: 99 } }
console.log(shallowCopyObject);   // { a: 1, b: { c: 99 } }


2. Deep Copy:
A deep copy creates a completely independent copy of the original object or array along with all its nested objects or arrays. Changes made to the copied structure will not affect the original, and vice versa.


The DRAWNBACK of the deep copy is that it does not copy the function, and not acceptable for the large number of keys. So to fix this we can use loadash library
Deep Copy Examples:
# A) Using JSON.parse and JSON.stringify:
const originalArray = [1, 2, [3, 4]];

// Deep copy using JSON
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));

deepCopyArray[2][0] = 99;

console.log(originalArray);      // [1, 2, [3, 4]]
console.log(deepCopyArray);     // [1, 2, [99, 4]]

# B) Using a Deep Copy Library (e.g., Lodash):
const _ = require('lodash');

const originalObject = { a: 1, b: { c: 2 } };

// Deep copy using Lodash
const deepCopyObject = _.cloneDeep(originalObject);

deepCopyObject.b.c = 99;

console.log(originalObject);      // { a: 1, b: { c: 2 } }
console.log(deepCopyObject);     // { a: 1, b: { c: 99 } }



