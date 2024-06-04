// Types of For loop in js
// In Js there are mainly 3 types of for loops as:-
// 1. for
// 2. for in
// 3. for of


// for loop

// Standard for loop: This loop is used when you know the number of iterations in advance.

// SYNTAX
// for (initialization; condition; increment/decrement) {
//     // code block to be executed
// }


for (let i = 0; i < 5; i++) {   
    console.log(i);
}


// for in loop

// SYNTAX
// for (variable in object) {
//     // code block to be executed for each iteration
// }

const person = {
    name: "Alfa",
    age: 22,
    gender: 'male'
}

for (let key in person) {
    console.log(key, person[key]);
}


// for of loop

// SYNTAX
// for (variable of iterable) {
//     // code block to be executed for each iteration
// }

const arr = [1, 2, 3, 4, 5]

for (let value of arr) {
    console.log(value);
}