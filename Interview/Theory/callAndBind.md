
In JavaScript, the call, bind, and apply methods are used to manipulate the this context of a function and to pass arguments to it. Here's an explanation of each along with examples:

#1. call(): The call() method is used to invoke a function with a specified this value and arguments provided individually.

function greet(name) {
    return `Hello, ${name}! I'm ${this.role}.`;
}

const person = { role: 'developer' };
const message = greet.call(person, 'John');
console.log(message); // Output: Hello, John! I'm developer.

In this example, call() is used to invoke the greet function with person as the this context and 'John' as the argument.

#2. apply(): The apply() method is similar to call(), but it accepts arguments as an array.

function sum(a, b) {
    return a + b;
}

const numbers = [2, 3];
const result = sum.apply(null, numbers);
console.log(result); // Output: 5

Here, apply() is used to invoke the sum function with null as the this context and [2, 3] as the arguments.

#4. bind(): The bind() method creates a new function that, when called, has its this keyword set to the provided value.

const person = {
    name: 'John',
    greet: function () {
        return `Hello, ${this.name}!`;
    }
};

const greetJohn = person.greet.bind(person);
console.log(greetJohn()); // Output: Hello, John!


Here, bind() is used to create a new function greetJohn with person as the this context. When greetJohn is invoked, it still refers to person.


USECASE:
call() and apply() are often used when you want to borrow methods from other objects and execute them in the context of a different object.

bind() is commonly used when you want to create a new function with a fixed this value, which is useful for event handlers or callbacks