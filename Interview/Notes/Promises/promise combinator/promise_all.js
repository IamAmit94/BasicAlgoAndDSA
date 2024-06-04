// Promise.all() is a method in JavaScript that takes an array (or any iterable) of promises as input and returns a
//  single Promise that resolves when all of the promises in the iterable have resolved or rejects with the reason 
// of the first promise that rejects. It's commonly used when you need to wait for multiple asynchronous operations 
//  to complete before proceeding.

// NOTE: IF ANY OF THE PROMISES IS FAILED THEN ALL THE PROMISES WILL FAILED.

// Simulated asynchronous functions that return promises
function asyncTask1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask1");
        }, 1000);
    });
}

function asyncTask2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask2");
        }, 2000);
    });
}

function asyncTask3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask3");
        }, 1500);
    });
}

// function asyncTask4() {  // rejected promise case
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Result of asyncTask4 FAILED");
//         }, 1000);
//     });
// }

// Using Promise.all() to wait for multiple asynchronous operations to complete
// Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]) // Case if any 1 promise is rejected
Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
    .then((results) => {
        console.log("All tasks completed successfully!");
        console.log("Results:", results);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
