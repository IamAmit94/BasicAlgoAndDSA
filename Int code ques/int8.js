// swap 2 number without using the 3 variable

let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swap values without direct reassignment and without extra variables
a = a + b;
b = a - b;
a = a - b;

console.log("\nAfter swapping:");
console.log("a =", a);
console.log("b =", b);
