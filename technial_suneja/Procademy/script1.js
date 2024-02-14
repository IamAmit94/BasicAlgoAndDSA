// DESTRUCTURING IN ARRAY

//DESTRUCTURING is a special assignment syntax in js that allows us to upack
// arrays or object into a bunch of variables.

//Destructuring syntax for arrays

let person = ["John", "Smith", 28];

// let[firstName, lastName, age]= person;
// let [firstName, lastName, age, gender] = person;
let [firstName, lastName, age, gender = "Male"] = person; // giving the default value

console.log(firstName); // John
console.log(lastName); // Smith
console.log(age); // 28
console.log(gender); // undefined

//Destructuring will nor destroy the original array
console.log(person);

//Always used the valid variable name while destructuring
// let[123,456,28] = person

// Nested array destructuring
let student = ["Sam", "smith", 20, ["london", "uk"]];

let [fName, lName, Age, [city, country]] = student;

console.log(fName);
console.log(lName);

console.log(age);

console.log(city, country);

// simple use case of destrucutin in funx;

const returnArray = () => {
  return ["sam", "jam", "tang"];
};

let [f1, f2, f3] = returnArray;

console.log(returnArray);

// https://www.javascripttutorial.net/es6/destructuring/
