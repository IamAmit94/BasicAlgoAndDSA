let birthYear = 2002;

let currentYear = new Date();


currentYear = currentYear.getFullYear();
let finalAge = currentYear - birthYear;
console.log(finalAge)


// swapping in js
let str = 'ignore';
let strArr = Array.from(str)

[strArr[1],strArr[2]] =  [strArr[2],strArr[1]]; // this is how you swap values in an

// strArr.join("")
console.log(strArr);