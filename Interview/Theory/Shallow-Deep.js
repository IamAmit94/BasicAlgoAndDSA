
// Shallow Copy
// There are 2 methods to copy the data 

// 1. By using the object.assign
// A shallow copy creates a new object and then copies all 
// enumerable properties of the original object into the new object. 
// If the properties of the original object are primitive
//  types (like numbers or strings) or references to other objects
//  , a shallow copy creates new references to the same nested 
//  objects.
const original = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Shallow copy
  const shallowCopy = Object.assign({}, original);
  
  // Modify the shallow copy
  shallowCopy.name = 'Alice';
  shallowCopy.address.city = 'Los Angeles';
  
  console.log(original); // { name: 'John', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
  console.log(shallowCopy); // { name: 'Alice', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
  

//   2. Using Spread Operator 

const original2 = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Shallow copy using spread operator
  const shallowCopy = { ...original2 };
  
  // Modify the shallow copy
  shallowCopy.name = 'Alice';
  shallowCopy.address.city = 'Los Angeles';
  
  console.log(original2); // { name: 'John', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
  console.log(shallowCopy); // { name: 'Alice', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
  console.log(shallowCopy.address.city); // Los Angeles
// PROBLEM WITH THE SHALLOW COPY
// while creaating the nested object. The nested object will share the same memory location

// One of the main problems with shallow copying, especially when dealing with nested objects or arrays, 
// is that it only creates copies of the immediate properties of the object. If the object contains nested objects 
// or arrays, the references to those nested objects or arrays are copied, not the objects or arrays themselves.
//  This can lead to unexpected behavior if you modify the nested objects or arrays in the copied object, 
//  as those changes will also affect the original object


// DEEP COPY

// Deep copying in JavaScript involves creating a completely new copy of an object or array, including all nested objects and arrays,
//  so that changes to the copied object do not affect the original one. There are several ways to achieve deep copying in JavaScript:

// 1. Using JSON.stringify and JSON.parse: This method involves serializing the object to a JSON string using JSON.stringify, then parsing the JSON string back into an object using JSON.parse. This creates a deep copy because the JSON serialization process creates new copies of all nested objects and arrays. 
// PROBLEM WITH STNGIFY AND PARSE
// HOWEVER IF THERE IS FUNCTION IN THE KEY THEN IT WILL NOT COPY THE FUNCTION IN CASE OF JSON STRINGFY. AND
// And in case if the data is very large or more then this takes longer than expected to resolve the feature.
const original3 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original3));


// 2. Using a Custom Recursive Function: You can write a custom function that recursively traverses the object and its properties, creating new copies of nested objects and arrays.
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Base case: return primitive values unchanged
    }
    const copy = Array.isArray(obj) ? [] : {}; // Create a new array or object
    for (const key in obj) {
        copy[key] = deepCopy(obj[key]); // Recursively copy nested properties
    }
    return copy;
}

const original4 = { a: 1, b: { c: 2 } };
const deepCopy = deepCopy(original4);


// 3. Using External Libraries: There are external libraries like Lodash that provide utility functions for deep copying objects.

const _ = require('lodash');
const original5 = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original5);

// Each method has its pros and cons, so you should choose the one that best fits your requirements and performance considerations. Keep in mind that deep copying can be expensive in terms of memory and performance for large and complex objects.
