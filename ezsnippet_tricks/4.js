//nulll and undefined
// NULL: variable is null means has no value. null is type of OBJECT
// UNDEFINED: variable is undefined means variable is not defined. and it's type is UNDEFINED

// null:

// It is a deliberate assignment to indicate the absence of a value or a non-existent object.
// It is a primitive value.
// When a variable is explicitly set to null, it means that the variable is intentionally empty or has no value.
// Example:
let myVar = null;
console.log(myVar); // Output: null


// undefined:

// It typically represents a variable that has been declared but not yet assigned a value.
// It is also the default value of function parameters that are not provided.
// It is a primitive value.
// Example:

let myVar2;
console.log(myVar2); // Output: undefined

function exampleFunction(parameter) {
    console.log(parameter); // Output: undefined if the parameter is not provided
}

exampleFunction();
