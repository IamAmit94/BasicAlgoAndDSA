// code step by step

// 1. EXAMPLE

// (function() {
//     var a=b=3
// })();

// console.log(typeof a) // undefined || becasues of the functional scope
// console.log(typeof b) // number || because of the global scope

/*********************************************************************************************************** */
// 2. EXAMPLE

// function foo() {
//     return
//      {
//         name: 'amit'
//     }
// }

// console.log(foo()) // {name: 'amit'} for the case when return and "{"  is on the same line
// will give undeined if the {} is written after the return, because js treat return as the single line statement. Since "{" is on the next line 
// and there is nothing in front of return is the reason it is returning the 'UNDEFINED"

/*********************************************************************************************************** */
// 3. EXAMPLE:  String

// console.log(1+1); // 2
// console.log(1 + "2" + "2"); //122 || becasue number + string + string
// console.log(1 + + "2" + "2"); // 32 || because when + + is done then the "2" is converted from string to number
// console.log(1 + + "2" + + "2"); // 5 || because when + + is done then the "2" is converted from string to number so 3+2

// console.log(1 + - "1" + + "2"); // 2 || because when + - is done then the "2" is converted from string to number so 1-1 =0 and 0+2 =2 

// console.log("A" - "B" + "2"); // NaN2 || becasuse we can not subtract string from string
// console.log("A" - "B" + "2"); // NaN

/*********************************************************************************************************** */
// 4. EXAMPLE


// var a = 0;
// function b() 
// {
//     a=10;
//     return;
//     var a = function() {} //
// }

// b();
// console.log(a) // 0 || becz of hoisting
// // In case you comment the code var a = function() {}. Then a = 10
// // a = 10 if we do remove the "var" as after return only the hoisting is performed
// // a = function in case you remove the return keyword

/*********************************************************************************************************** */
// 5. EXAMPLE

// console.log({}==={}); // false || when we compare the 2 object there memory location is compared is the reason it is false
// // however when we compare the variable then there value is compared is the reason then we got the "true" 

// var a = {}
// var b = {}

// console.log(a===b) // false

// // for the case we want to compare the object and want to make it true.
// var c = {}
// var d = c;
// console.log(c===d); // true

/*********************************************************************************************************** */
// 6. EXAMPLE: HOISTING CONCEPT

// function test() {

//     function foo(){
//         return 100;
//     }
//     return foo()

//     function foo() {
//         return 10
//     }
// }

// console.log(test()) // 10

/*********************************************************************************************************** */
// 7. EXAMPLE: FUNCTION HOISTING

// test() // test function is called || becaused js also hoisted the function
// function test() {
//     console.log('test function is called!');
// }

// // test() // test function is called
// // || the hoisting is possible for the function declartion not for the function Expression

// test2() // test2 is not defined because of hoisting
// console.log(test2) // then it will return undefined 
// var test2 = function() {
//     console.log('fun test 2');
// }


/*********************************************************************************************************** */
// 8. EXAMPLE: Boolean


// console.log(true+true); // 2
// console.log(true+false); // 1
// console.log(true+true-false); // 2
// console.log(-true+true-false); // 0
// console.log(-true-true-false); // 2

/*********************************************************************************************************** */
// 8. EXAMPLE: PROMISE FINALLY METHOD
// Promise is used to handle the async data. Promise return the function itself

// let task = new Promise (function(resolve, reject) {
//     setTimeout(() => {
//         // resolve('done')
//         reject('reject done') // will give error UNHANDLED PROMISE REJECTION if error is not written
//     }, 1000)
// })

// task.
// finally(() => { // will execute in the both reject and resolve case
//     console.log(' Finally is executed ');
// }).
// then((data) => {
//     console.log(data); // resolve done
// },(error) => {
//     console.log('Error =>',error); // Error => reject done
// }
// )

/*********************************************************************************************************** */
// 9. EXAMPLE: SORTInG

// let data = [3, 1,7,12,23,45]

// console.log(data.sort()); // [ 1, 12, 23, 3, 45, 7 ] || becase the when we apply the sort method on the array then it convert the element to the string and then sort it accordingly

// console.log(data.sort((a,b) => a-b)); // [ 1, 3, 7, 12, 23, 45 ] || will sort the element in the assending order and for the decending b-a


/*********************************************************************************************************** */
// 9. EXAMPLE: CLOUSER , LEXICAL SCOPE and diffrence between them

// LEXICAL SCOPE: When the inner  function access the outer  function variable then it is called lexical scope

// CLOUSER: Inner function access the outer function scope it is called clouser and these scope can be access only on the run time


// function createBase(a) {
//     return (b) =>{
//         return a+b
//     }
// }

// let addSix = createBase(6);

// console.log(addSix(10)); // 16
// console.log(addSix(20));// 26

// console.log(!!10+20) // 21

/*******************************************************************/

// let x = 0;
// console.log(x++); // 0 || because it is printed already and then incremented

/*******************************************************************/

// console.log(3 + 4 + '5'); //75

/*******************************************************************/

// const obj = {
//     a: 'one',
//     b: 'two',
//     a: 'three'
// }

// console.log(obj); // { a: 'three', b: 'two' }

/*******************************************************************/

// let person = {name: 'Amit'};
// let members = [person];

// person = null
// console.log(members); //[ { name: 'Amit' } ]

/*******************************************************************/

function getAge(...args) {
    console.log(typeof args);
}

getAge(22) // object

/*******************************************************************/
/*******************************************************************/
// IMPORTANT
// optimise the performance of the for loop

// let data = [10,20,30,40,50,60,77,88]

// for(let i=10;i<data.length;i++) { // as in this for the every iteration the data.length is calculating
//     // do some work
// }

// // in orde to optimse the performance we will do

// let n = data.length;
// for(let i=10;i<n;i++) { // in this the length is assigned to the variable and then we are calculating the data
//     // do somework
// }

/*******************************************************************/
/*******************************************************************/
 console.log(typeof NaN) // number

 /*******************************************************************/
// TRICKY INTERVIEW QUESTIONS

// fix the length of array and print the array

let data = [4,7,1,4,9,2,4,1];
// data.length = 3 // in order to fix the length of array
console.log(data); // [ 4, 7, 1 ]

// Sum of array element

let sum = data.reduce((x, y) => x + y);
console.log(sum);

// remove the duplicate value from the array

let upArr = new Set(data)
console.log('unique Element --', [...upArr]); // we need to destruct in order to get the unique value

// value swap using destructuring

let x = 20, y=10;

[x,y] = [y,x]
console.log(x,  y);