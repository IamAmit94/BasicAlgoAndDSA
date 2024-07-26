 //Function Statement
// a() // function hoisting
// b() // it will give the error
 function a() {
    console.log('This is function statement')
 }
 a()
 /******************************************************************************************************************************************************** */
 /******************************************************************************************************************************************************** */
 
 // Function Declaration

 var b = function () {
    console.log('this is function declaration: assigning the func to a variable')
 }
 b()

 /******************************************************************************************************************************************************** */
 /******************************************************************************************************************************************************** */
 
 // Anonymous function


//  function () { // will throw the error "SyntaxError: Function statements require a function name"
//     console.log('function without name, It does not have there own identity')
//  }
 // || anonymous function are used in a place where the function are `used as a value`.

/******************************************************************************************************************************************************** */
/******************************************************************************************************************************************************** */
 
 // Named function Expression

//  var c = function abc() {
//     console.log('This is a named function Expression ')
//  } 

// abc() // It will provide as Error : "ReferenceError: abc is not defined"
// assignning the function statement to a variable is know as "Named function"

/******************************************************************************************************************************************************** */
/******************************************************************************************************************************************************** */
 

 // Diffrence between Parameters & Arguments ?


 var d = function (param1, param2) { // values passed inside the funtion defination are PARAMETERS [labels or identifer which gets the values are parameters]
    console.log(`Param1 === ${param1} and Param2 === ${param2}`)
 }
 d(1,2) // values passed inside the function are called ARGUMENTS (Manily called at the time of function call)

/******************************************************************************************************************************************************** */
/******************************************************************************************************************************************************** */
// First Class Function
// Passing the function inside the another function as "ARGUMENTS" are know as 'FIRST CLASS FUNCTION'

// Assigning a function to a variable
const greet = function(name) {
    return 'Hello, ' + name + '!';
};

// Passing a function as an argument
function greetUser(greeterFunc, userName) {
    return greeterFunc(userName);
}

console.log(greetUser(greet, 'Amit')); // Output: Hello, Amit!

/********************************************** */
// first class function also return the functions

// Function returning another function
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


/******************************************************************************************************************************************************** */
/******************************************************************************************************************************************************** */
 
 // Arrow Functions

 