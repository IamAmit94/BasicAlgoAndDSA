// when you are going into an error and you have already setup its menthod to get out from it

const obj = {a:1,b:2};
const value = obj.c || "Not Found";
console.log(value)


// In JavaScript, a fallback mechanism is commonly used to handle scenarios where a value might be missing or undefined. 
// A fallback provides a default value or alternative behavior to use when the original value is not available.

// Here's an example of using a fallback with the nullish coalescing operator (??) in JavaScript:

// Using fallback for a variable
let myVar = null;
let fallbackValue = "Default Value";

let result = myVar ?? fallbackValue;
console.log(result); // Output: "Default Value"

// Using fallback for a function parameter
function greet(name) {
    name = name ?? "Guest";
    console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, Guest!"
greet("Alice"); // Output: "Hello, Alice!"


// In the example above, the nullish coalescing operator (??) is used to provide a fallback value 
// when the original value is null or undefined. It is a concise way to express the common pattern of
//  providing a default value if the variable is falsy.