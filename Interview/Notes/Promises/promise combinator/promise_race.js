
// Promise.race() is a method in JavaScript that takes an iterable of promises as input and returns a single
//  Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
//   It's commonly used when you want to execute multiple asynchronous operations concurrently and handle the
//    result of the first one to complete.


// PROMISE.RACE IS SIMILAR TO THE PROMISE.ALL IT RETURN THE 1ST PROMISE THAT GET FULLFILED OR REJECTED.


// Simulated asynchronous functions that return promises
function asyncTask1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask1");
        }, 2000);
    });
}

function asyncTask2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask2");
        }, 1000);
    });
}

function asyncTask3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask3");
        }, 1500);
    });
}

// Using Promise.race() to wait for the first asynchronous operation to complete
Promise.race([asyncTask1(), asyncTask2(), asyncTask3()])
    .then((result) => {
        console.log("The first task completed successfully!");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
// who so ever promise is fullfilled or reject first will be displayed first.