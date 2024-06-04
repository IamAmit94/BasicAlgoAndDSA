// var vs let vs const
//scope

// VAR is functional scope
// LET is block scope
// CONST is block scope
/***************************************************************************************** */
// Shadowing in js


// function test() {
//     let a = 'Hello';

//     if(true) {
//         let a = "Hi" // This 'a' will shadow the above 'a' and overlap the value of 'a';
//         console.log('inside :', a);
//     }

//     console.log('Outside :', a);
// }

// test();


// Output of the above code
// inside : Hi
// outside : Hello

/***************************************************************************************** */
// we can shadow the "var" variable using the "let" but can not shadow the "let" variable using "var"

// Illegal shadowing ||
// function test2() {
//     let a = 'Hello';
//     var b = 'Welcome'

//     if(true) {
//         var a = 'welcome me!'// throw the error variable is already defined
//         let b = "Hi" 
//         console.log('inside :', a);
//         console.log('inside :', b);
//     }

//     console.log('Outside :', a);
//     console.log('Outside :', b);
// }

// test2();

// NOTE: let and const can not be declare in the same scope, However var can be declare in the same scope.

// let A;
// {
//     let A; // This is fine and will work because we are shadowing the variable
// }
/***************************************************************************************** */
// DECLARATION WITHOUT INITIALIZER
// let a;
// var a;
// const a; // will give the Error for const declaration without initializer


// We need to declare the const with the initializer otherwise it will throw the error;

// const a; // will throw the error
// const a = 20; // will not throw the error


// RE-INITIALISATION
// var a = 10;
// a = 5; // will work

// let a = 2;
// a = 5; // will work

// const a = 2;
// a = 5; // will throw the error

// VAR AND LET can be reinstialized howver const can not

/***************************************************************************************** */

//****************************** */ HOISTING ****************************
// During the creation phase js engine moves your variable and function declartion to the top of the code and this
// is known as HOISTING
//ex
// console.log(count); // It will give Undefined
// var count = 1;


// console.log(count); // can not access the count before initialization
// let count = 1; // let variable are also hoisted but they are hoisted in the temporal debt zone.

//temporal debt zone is the time betwn the declartion and initialization of the let and const variable.

// WHAT WILL THE OUTPUT OF THE FOLLOWING CODE

// function abc() {
//     console.log(a)

//     var a = 10;
// }

// abc();


// It will print the undefined


// what will the output


function abc() {
    console.log(a,b,c)

    const c =30;
    let b = 20;
    var a = 10;
}

abc();

// can not access the b before initialization. However let and const are hoisted in the temporal debt zone.

