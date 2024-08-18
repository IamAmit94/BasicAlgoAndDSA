// const countDown = (num) => {
//     if (num <= 0) {
//         console.log(`Timer up`);
//         return `Time up for ${num}`; // base case
//     }

//     console.log(num);
//     num--;
//     countDown(num); 
//     // return countDown(num); // in order to prevent the `undefined at end
// }
// console.log(countDown(10)) 



/************** understanding the recursion *************** */

// const sumRange = (num) => {
//     if(num == 1) return 1;
//     return num +sumRange(num-1)
// }

// console.log(sumRange(3))


// // return 3 + sumRange(2) // 3+3
// //          return 2 + sumRange(1) // 1+2
//                     // return 1 + 1 //  coz if cond satifsy
// //  
// //



/************************ factorial of num ****************** */

// const fact = (num) => {
//     let total = 1;
//     for(let i = num;i>0;i--) {
//         total = total * i
//     }
//     return total
// }


// console.log(fact(5))


/******************** factorial of num using recursion *****************/

const factorial = (num) => {
    if(num === 1) return 1; // base condi if removed callStack will be full
    // if(num === 1) console.log(`first`); // if we do not return in the recursion then also callstack will be full coz it will not exit the function execution
    return num * factorial(num-1)
}

console.log(factorial(3))

// 3 * fact(2)  ==> 3 * 2
// 2 * fact(1) ==> fact(1) == 1 ===> 2*1 ===> 2