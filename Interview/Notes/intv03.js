// FUNCTIONS HOISTING SCOPE CALLBACK ARROW FUNCTIONS ETC

// /** JS INTERVIEW QUESTIONS**** */


// functions in js

//Q1: What is function declaration?
// This is function declaration also called as function defination or function statement

// function square(num) {
//     return num * num
// }

/************************************************************************************ */

// Q2: What is Function Expression ?
// Storing the function inside the variable is function Expression

// const squareRes = (function (num) {
//   return num * num;
// })
  // function without name is known as annonymous function
// THE ANONYMOUS FUNCTION CAN BE PASS TO THE VARIABLE OF TO FUNCTION AS A CALLBACK
// FUNCTION EXPRESSION AND DECLARATION ARE SAME JUST THE DIFFRENCE THAT FUNCTION EXPRESSION ARE ASSIGNED TO A 
// VARIABLE


/************************************************************************************ */

// Q3: What ar first class functions ?
// In a language where function is treated as variable there function are called first class functions.

// function square(num) {
//   return num * num
// }

// function displaySquare(fn) {
//     console.log("Square is ", fn(5));
// }

// displaySquare(square) // 25


/************************************************************************************ */

//Q4: what is IIFE?
// IIFE is an Immediately Invoked Function Expression. It is a function that is not executed until it is called.

// (function square(num) {
//     console.log(num * num)
// }) (5);

// 25


/************************************************************************************ */

//Q3: IIFE - i/o based questions

//   (function(x) {
//     return (function(y) {
//       console.log(x); // 10
//     })(2);
//   })(10);

  // x = 10 output

// clousers: The ability to access the variable and function that are lexically out of scope are called clousers.  
// Clousers are created whenever the new functions are created. Becasue that function has the refrence to it's outer
//  scope


/************************************************************************************ */

//Q4: Function scope - i/o based questions


//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

// output 0 1 2 3 4// however if we change the let to var then output will be: 5, 5, 5, 5, 5 becz of the scope

/************************************************************************************ */

// Q5: function Hoisting: IN case of the hoisting if you call the function before or after it's declaration. 
// It will work fine in both cases

// functionName();

// function functionName() {
//     console.log("Printing the username")
// }

// output will be: Printing the username


//   var x = 21;

//   var fun = function () {
//     console.log(x);
//     var x =20;
//   }

//   fun()
// // output will be undefined

/************************************************************************************ */

//Q6: Params vs Arguments

// function square(num) { // Parameters  [received by the function]
//     console.log(num * num);
// }

// square(5) // Arguments [passed to the function]

/************************************************************************************ */
// Q7: spread operator

// function multiply(...nums) { // rest operator || Parameter
//     console.log(nums[0]*nums[1]);
// }

// var arr = [5,6];
// multiply(...arr); // spread operator || Arguments



// const fn = (a, ...SVGAnimatedNumberList, x, y) => {
//     console.log(x,y)
// }

// fn(5,6,7,8)

// output: Rest parameter must be last formal parameter


/************************************************************************************ */
//Q8: What is callback function ?
// callback function is a function passed as an argument to another function.

// function greetings(name) {
//     alert('hello ', name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name');
//     callback(name);
// }

// processUserInput(greetings);

/************************************************************************************ */
// Q8: Diffrence between the Arrow vs normal function


// 1: Syntax
// function square(num) {
//     return num * num
// }

// const squareArrow = (num) => {
//     return  num * num;
// }

// 2. Implicit "return" keyword

// const sqrArrow = (num) => num * num;
// if we put the curly braces then we need to put the return keyword

//  const sqrArrow = (num) => {
//     return num * num;
// }

//3. Arguments

// function fn() {
//     console.log(arguments);
// }

//fn(1,2,3)

// const fnArr = () => {
//     console.log(arguments);
// }

//4. this - keyword

// let user = {
//     username : 'John',
//     rc1: () => {
//         console.log('arrow this ', this.username);// this will print undefined since it will be targetting the
//     global object
//     },

//     rc2() {
//         console.log('normal function ', this.username);
//     }
// }

// user.rc1()
// user.rc2()

