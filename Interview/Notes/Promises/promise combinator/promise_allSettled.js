// promise.allSettled is SIMILAR TO THE PROMISE.ALL EXCEPT IN THIS IF ANY OF THE CONDITION IS FAILED
// IT WILL STILL RETURN ALL THE REMANING PROMISES//
//HOWEVER IN THE PROMISE.ALL IF THE ANY CONDITION IS REJECTED THEN WHOLE PROMISE WILL BE FAILED

// Simulated asynchronous functions that return promises
function asyncTask1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result of asyncTask1");
        }, 2000);
    });
}

function asyncTask2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: asyncTask2 failed");
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

// Using Promise.allSettled() to wait for all promises to settle
Promise.allSettled([asyncTask1(), asyncTask2(), asyncTask3()])
    .then((results) => {
        console.log("All tasks have settled!");
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Fulfilled:", result.value);
            } else if (result.status === "rejected") {
                console.log("Rejected:", result.reason);
            }
        });
    });
