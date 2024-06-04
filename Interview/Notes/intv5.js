// This keyword

//There are 2 types of object binding:-
// 1. Implicit: when we do not use the 'this'
// 2. Explicit: when we use the 'this'

// this.a = 5; // this is global context
// console.log(this.a) // 5

// function getParam() {
//     console.log(this.a); // 5: since it is targeting the window object
// }

// getParam();
/************************************************************* */
/***************************THEORY********************************** */

// let user = {
//     name: "Amit",
//     age: 20,
//     getDetails() {
//        console.log(this.name)
// },
// }

// user.getDetails()// Amit ||since it is targeting the parent object

/***** IN case of nested object*********** */
// let user = {
//     name: "Amit",
//     age: 20,
//     childObj: {
//         newName: 'Alfa',
//         getDetails() {
//             console.log(this.newName, "and", this.name)
//         },
//     },
// };

// user.childObj.getDetails() // Alfa and undefined ||coz this is pointing to the immediate parent object


/****************In case if we repl;ace it eith the arrow function******** */

// let user = {
//     name: "Amit",
//     age: 20,
//     getDetails: () => {
//         console.log(this.name)
//     },
// }

// user.getDetails() // undefined || since it is targeting the window object. As in arro func the 'this' comes from the 
// parent function as show below

// let user = {
//     name: "Amit",
//     age: 20,
//     getDetails() {
//        const nestedArrow = () => console.log(this.name);
//        nestedArrow()
//     },
// }

// user.getDetails() // Amit || since it is inhering the value from the parent obj



/****************** use of this in class***************** */

// class user {
//     constructor(n) {
//         this.name = n;
//     }
//     getName() {
//         console.log(this.name)
//     }
// }


// const User = new user('alfa')

// User.getName()

/************************************************************* */
// Q1: What is the output ?

// const user = {
//     firstName: "Amit",
//     getName() {
//         const firstName = "Amit Rawat";
//         return this.firstName
//     }
// }


// console.log(user.getName()); // Amit || since it is targetin the user obj
/************************************************************* */
// Q2: What is the result of accessing its ref ? why ?


// function makeUser() {
//     return {
//         name: "Alex",
//         ref: this,
//     };
// }
// let user = makeUser();

// console.log(user.ref.name);// It will print Empty since it is targeting the Window obj

// || in order to fix this and print the name we will do this:-
// function makeUser() {
//     return {
//         name: "Alex",
//         ref() {
//             return this // now this will be targeting parent obj
//         }
//     };
// }
// let user = makeUser();

// console.log(user.ref().name)


/************************************************************* */
// Q3: What is the output ?

// const user = {
//     name: "Amit Rawat",
//     logMessage() {
//         console.log(this.name); // what will be logged ?
//     }
// }

// setTimeout(user.logMessage, 1000)  // this will print undefined since it is targeting the 
// window object and it does not contain name as we are using "user.logMessage" as callbck in it

// in order to fix this and prit the name:-

// setTimeout(function () {
//     user.logMessage();
// }, 1000) // will print the name since now it will be targeting the user 

/************************************************************* */
// Q4: What is the output ?

// const user = {
//     name: "Amit",
//     greet() {
//         return `Hello ${this.name}`
//     },
//     farewell: () => {
//         return `Goodbye, ${this.name} !`
//     },
// }


// console.log(user.greet()); // Amit
// console.log(user.farewell()); // Undefined || since we do not have any parent obj so it will be targeting the window obj a

/************************************************************* */
// Q5:  What is the output ?

// var length = 4;

// function callback() {
//     console.log(this.length);// what is logged ?
// }

// const object = {
//     length: 5, 
//     method(fn) {
//         fn();
//     }
// }

// object.method(callback)

/************************************************************* */
// Q6: What is the output ?


/************************************************************* */
// Q7: What is the output ?