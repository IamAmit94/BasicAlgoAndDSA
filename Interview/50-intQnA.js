

// https://www.youtube.com/watch?v=riloPTtAuAM&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=34

/******************************************************** */
// Question: 01

// function fruit() {
// console.log(name); // Undefined || js hoisting rule is applied
// console.log(price); // Error: can not access it before initialization || hoisting is not applied for the (literals) let and const

// var name = "apple";
// let price = 20
// }

// fruit()

/******************************************************** */
// Question: 02

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// } // 3 3 3 || because when we are using the literal with the variable that have the global scope
// // is the reason it is printing 3 3 3. And setTimeout will take sometime to show the response and before that
// // the loop is completed

/******************************************************** */
// Question: 03

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   } // 0 1 2 || since let do not have the global scope on the otherhand var has the global scope is the reason output is diffrent


/******************************************************** */
// Question: 04
// console.log(+true); // 1 || whenever we are using the "+" sign befor boolean or string it convert it to number
// console.log(typeof +true); // number

/******************************************************** */
// Question: 05

// console.log(!"amit"); // false || this is string and we are negating it, so it's opposite value is "false"
// console.log(!!"amit"); // true || this is string and we are negating it 2 times leads to make it "true"
// console.log(typeof("amit")); // string
/******************************************************** */
// Question: 06

// let data = "size";
// const bird = {
//     size: "small"
// }
// console.log(bird[data]); // small || when we do have the object and we need to pass the variable to it we can use the 
// //  "[]"
// console.log(bird["size"]); // small || samething can be used using the string
// console.log(bird.size); // small
// console.log(bird.data); // undefined || however we can not use it witht the "." notation

/******************************************************** */
// Question: 07

// let c = {name: "Alfa"};
// let d;

// d = c;
// c.name = "Beta";
// console.log(d.name); // Beta || since we are sharing the refrence, so the memory also shared is the reason output is "beta"

/******************************************************** */
// Question: 08
// var x;
// var x =12;
// console.log(x); // 12

/******************************************************** */
// Question: 09

// let x;
// var x =12;
// console.log(x); // Identifier 'x' has already been declared || will give error

/******************************************************** */
// Question: 10

// let a = 3;
// let b = new Number(3);

// console.log(a == b); // true ||
// console.log(a === b); // false || since it is checking the type and data type of b is 'object

/******************************************************** */
// Question: 11

// let name;
// nmae = {}; // typo
// console.log(name); // undefined

/******************************************************** */
// Question: 12

// let num = 0;
// console.log(num++); // 0
// console.log(++num); // 2
// console.log(num); // 2

/******************************************************** */
// Question: 13

// function getAge(...args) {
//     console.log(typeof args); //object
// }

// getAge(21)


/******************************************************** */
// Question: 14

// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age); //age is not defined
// }

// getAge()

/******************************************************** */
// Question: 15
// const sum = eval('10*10+5')
// console.log(sum); //105
/******************************************************** */
// Question: 16
//  how long is cool_secret accessible ?
// ANSWER: once the browser is closed it will not be accessible
// sessionStorage.setItem('cool_secret', 123)

/******************************************************** */
// Question: 17
// const obj = {1:"e", 2: "b", 3: "c"}

// console.log(obj.hasOwnProperty("1")); // true
// console.log(obj.hasOwnProperty(1)); // true

/******************************************************** */
// Question: 18

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i); // 1,2,4
// }

/******************************************************** */
// Question: 19
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('second'))
// const baz = () => console.log('third');


// bar()
// foo()
// baz() // first, third, second


/******************************************************** */
// Question: 20

// const person = {name: 'Alfa'};

// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 21)); // Alfa is 21
// console.log(sayHi.bind(person, 21)); // [Function: bound sayHi]

// call() immediately calls the function with the provided this context and arguments.
// bind() returns a new function with the specified this context and optional arguments
//        bound to it, without calling the function immediately.


/******************************************************** */
// Question: 21

// function sayHi() {
//     return (() => 0) ();
// }

// console.log(typeof sayHi()); //number || since arrow function is returning the another function after it

/******************************************************** */
// Question: 22

// function sayHi() {
//     return () => 0
// }

// console.log(typeof sayHi()); // function || as we
// console.log(typeof sayHi() ()); // number
/******************************************************** */
// Question: 23


// console.log(typeof typeof 1); //string ||since we are checking the type of number and number type is string
/******************************************************** */
// Question: 24

// const numbers = [1,2,3];
// numbers[9] = 11
// console.log(numbers); //[ 1, 2, 3, <6 empty items>, 11 ]
/******************************************************** */
// Question: 25
// const numbers = [1,2,3];
// numbers[9] = numbers
// console.log(numbers); //[ 1, 2, 3, <6 empty items>, [Circular *1] ]

/******************************************************** */
// Question: 26

// console.log(!!null);// false || !null ==> true, !true ==> false
// console.log(!!""); // false || !"" ==> true , !true ==> false
// console.log(!!1);// true

/******************************************************** */
// Question: 27

// console.log(setInterval(() => console.log('HELLO'), 1000));
// console.log(setInterval(() => console.log('HELLO'), 1000));
// console.log(setInterval(() => console.log('HELLO'), 1000));


/******************************************************** */
// Question: 28

// console.log([..."alfa"]); //[ 'a', 'l', 'f', 'a' ]


/******************************************************** */
// Question: 29

// console.log([] == []); // false
// console.log([] === []); // false || becase both memory is diffrent

/******************************************************** */
// Question: 30

// (() => {
//     let x = (y = 10)
// }) ();

// console.log(typeof x);// undefined|| becasue of scope


/******************************************************** */
// Question: 31

// (() => {
//     let x = y = 10
// }) ();

// console.log(typeof y);// number|| becasue of scope



/******************************************************** */
// Question: 

console.log("cat" && "dogs ");