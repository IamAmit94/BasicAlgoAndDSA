/*****************************************************************
 *
 *
 *                   REST OPERATOR IN JS
 *
 *
 *
 *****************************************************************/

// The REST PATTERN collects rest of the values into an array or rest of the
// properties into an object
// The rest operator looks exactly like the spread operator, but it does opposite
//of the spread operator

// || Rest operator is always used before the assingment operator
// rest parameter should always be in the last

// SPREAD OPERATOR
let arr = [10, 20, 30];
console.log(...arr);

// DESTRUCTURING OF ARRAYS

let numbers = [10, 15, 20, 25, 30, 35];
let [a, b, ...other] = numbers;
console.log(a, b, other);

// DESTRUCTURING OF OBJECT

let num = { x: 10, y: 20, z: 30, x1: 35, x2: 40 };
let { x, y, ...obj } = num;
console.log(x, y, obj);

// REST PARAMETER
function addNumber(num1, num2, ...num) {
  let sum = num1 + num2;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(addNumber(20, 30));
console.log(addNumber(20, 30, 40));
console.log(addNumber(20, 30, 40, 50));
console.log(addNumber(20, 30, 40, 50, 60, 70, 80, 90));

//https://www.javascripttutorial.net/es6/javascript-rest-parameters/
