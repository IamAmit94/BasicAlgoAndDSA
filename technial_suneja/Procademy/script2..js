// Object destructuring

//DESTRUCTURING is a special assignment syntax in js that allows us to upack
// arrays or object into a bunch of variables.

//Destructuring syntax for arrays

var employee = {
  name: "steve",
  age: 28,
  gender: "Male",
  Area: ["London", "uk"],
  workDetails: { Experience: 5, company: "Google" },
};

//Whate we do earlier before destructuring

// let name = employee.name;
// let age = employee.age

//DESTRUCTURING SYNTAX FOR OBJECT

let {
  name: fname,
  age,
  gender,
  lname,
  workDetails: { Experience: exp, company },
} = employee;
console.log(fname);
console.log(age);
console.log(gender);
console.log(lname); // undefined
console.log(exp, company);

//In case of the array the destructuring was based on the position however
// in object the destructuring is based on the refrence of object

// MUTATING VARIABLE VALUE

let x = 110;
let y = 220;

let obj = { x: 10, y: 20 };

({ x, y } = obj);
// if ( ) is not provided in the above code then it will execute the syntax error
console.log(x, y, "======= mutating the variable");

//DESTRUCTURING OBJECT RETURNED BY A FUNCTION
function returnObject() {
  return { a: 111, b: 222 };
}

let { a, b } = returnObject();
console.log(a, b);

//DESTRUCTURING NESTED ARRAY OF AN OBJECT
let {
  Area: [city, country],
} = employee;
console.log(city, country);

// https://www.javascripttutorial.net/es6/javascript-object-destructuring/
