// Interview Questions related to CURRYING

// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
//  It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining 
// closures by immediately returning their inner functions simultaneously.



//Q1:  Convert f(a, b) into f(a)(b).
/*f(a)(b) implementation */
// orignal func
// function f(a,b) {
//     console.log(a,b)
// }
// converted function 
// function f(a) {
//     return function (b) => {
//          return `${a} ${b}`;
//     }; 
// }
// console.log(f(1)(2)) // works
// console.log(f(1)); /* (b) => {return "Works" } */

// Q: Why should we use currying?
// Ans: To reduce the number of arguments passed to a function.


// Q2: Convert sum(2,6,1) to sum(2)(6)(1)

function sum(a) {
    return (b)=> {
        return (c) =>{
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3)); //6
console.log(sum(1)); // [Function (anonymous)]

// Q3: Create a curried function named sum that take an argument as operation
/**
 * evalute("sum")(2)(4) => 6
 * evalute("multiply")(2)(4) => 8
 * evalute("divide")(4)(2) => 2
 * evalute("subtract")(4)(2) => 2
 * 
 */



function evalute(operations) {
    return function (a) {
        return function (b) {
            if(operations === "sum") return a + b;
            else if(operations === "multiply") return a * b;
            else if(operations === "divide") return a / b;
            else if(operations === "subtract") return a - b;
            
        }
    }
}


const mul = evalute('sum')

console.log(mul(2)(3));
console.log(mul(2)(4));

// Q3: Infinite currying


function add(a) {
    return function(b) {
        if (b) return add(a+b);
        return a;
    }
}

console.log(add(5)(4)(3));


// Q4: Currying vs Partial Application

// Mention below is the Parital application example
function sum(a) {
    return function (b,c) {
        return a + b + c;
    }
}


const x = sum(10);
console.log(x(5,6));
console.log(x(51,62));


// Or

console.log(sum(20)(1,3))


// to currying the above function

function sum(a) {
    return function(b){
        return function(c) {
            return a + b + c;
        };
    };
}


// ****************** MOST IMPORTANT *******************
// Q: curry() implementation
// convert f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunction(...args) {
        // console.log(args.length, func.length)
        if(args.length >= func.length) {
            return func(...args);
        } else {
                return function (...next) {
                    return curriedFunction(...args, ...next)
                }
            }
    }
}



const sum  = (a,b,c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4))


