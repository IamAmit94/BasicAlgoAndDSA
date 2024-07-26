// similar to the promise.race however it will return the first fullfilled promise and ignore all the remaning
//  one


// Simulated asynchronous functions that return promises
function asyncTask1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: asyncTask1 failed");
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

// Using Promise.any() to wait for the first promise to fulfill
Promise.any([asyncTask1(), asyncTask2(), asyncTask3()])
    .then((result) => {
        console.log("The first task completed successfully!");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.error("All promises were rejected:", error);
    });
