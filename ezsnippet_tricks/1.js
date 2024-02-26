// self evoking function or SELF CALLING FUNCTION

// calling your self is known as self evoking function
// usecase

// Noraml function syntax
// function test() {
//     console.log('normal function')
// }

// test()

//SELF EVOKING FUNCTION: The self-executing anonymous function is a special function which is invoked right after it is defined. 
// There is no need to call this function anywhere in the script. This type of function has no name and hence it is called an anonymous function. 
// The function has a trailing set of parenthesis. The parameters for this function could be passed in the parenthesis. 

// does not has the name and it called itself, Mainly used to clean up the code and to use the function instantly and seprating it from the global area
//SYNTAX:
// (function (parameters) {
//     // Function body
// })(arguments);

// Why use an anonymous function? 

// The advantage of using an anonymous function rather than writing the code directly is that the variables and functions defined within 
// the anonymous function are not available to the code outside it. This prevents the global namespace from becoming littered with variables and 
// functions that may not be needed further. It can be also be used to enable access to only the variables and functions.

let a = 10;



(function () {
    console.log('self evoking function')
    let a = 20;
    console.log('inside a ==> ',a)
})()

console.log(a)