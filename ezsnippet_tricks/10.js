// JavaScript is designed to be asynchronous, meaning that it can execute multiple operations concurrently without blocking the execution of the
//  program. This is particularly important for handling tasks like fetching data from a server, handling user input, or performing time-consuming 
//  operations without freezing the user interface.

// One of the main mechanisms for handling asynchronous operations in JavaScript is the use of callbacks, Promises, and the async/await syntax.

// Here's an example to illustrate the asynchronous nature of JavaScript using the setTimeout function:

console.log("Start");

// Asynchronous operation using setTimeout
setTimeout(() => {
    console.log("Inside setTimeout callback");
}, 2000);

console.log("End");

// In this example, the console.log("Start") is executed first, then setTimeout is called. The setTimeout function schedules the provided callback to
//  be executed after a specified delay (in milliseconds), but the program continues to execute without waiting for the delay to complete. Therefore,
//   the next line (console.log("End")) is immediately executed.

// After approximately 2 seconds, the callback inside setTimeout is triggered, and it logs "Inside setTimeout callback" to the console. 
// This asynchronous behavior allows other parts of the program to continue running without waiting for the delayed operation to finish.

// Using Promises and async/await:
console.log("Start");

// Asynchronous operation using Promise and async/await
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncOperation = async () => {
    console.log("Before awaiting delay");
    await delay(2000);
    console.log("After awaiting delay");
};

asyncOperation();

console.log("End");

// In this example, the delay function returns a Promise that resolves after a specified delay. The asyncOperation function uses await to asynchronously wait for the delay function to complete. Similar to the setTimeout example, the program continues to execute other lines without waiting for the delay.

// The output would be:

// Start
// Before awaiting delay
// End
// After awaiting delay

// This asynchronous behavior is crucial for building responsive and non-blocking applications, especially in scenarios like handling user interactions or making network requests. It allows JavaScript to efficiently manage concurrent tasks and maintain a smooth user experience.





