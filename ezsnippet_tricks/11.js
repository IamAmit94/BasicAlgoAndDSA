// setInterval and setTimeout are both functions in JavaScript that are used to execute a function repeatedly, but they have some key differences.

//                                                setTimeout:
// The setTimeout function is used to execute a function after a specified delay. It schedules the execution of a function once, after the specified
// time has elapsed.

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout callback after 2000 milliseconds");
}, 2000);

console.log("End");

// In this example, "Start" is logged, then setTimeout is called, and "End" is logged immediately. After approximately 2 seconds, 
// the callback inside setTimeout is executed, logging "Inside setTimeout callback after 2000 milliseconds" to the console.

//                                                         setInterval:
// The setInterval function is used to repeatedly execute a function at a specified interval. It schedules the repeated execution of a function
//  at a specified time interval until it is cleared.

console.log("Start");

const intervalId = setInterval(() => {
    console.log("Inside setInterval callback every 1000 milliseconds");
}, 1000);

// Clear the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared after 5000 milliseconds");
}, 5000);

console.log("End");


// In this example, "Start" is logged, then setInterval is called to log 
// "Inside setInterval callback every 1000 milliseconds" every second. After 5 seconds, the 
// interval is cleared using clearInterval, and "Interval cleared after 5000 milliseconds" is logged.


// DIFFRENCE
/**
 * Differences:
1. Execution Behavior:

setTimeout: Executes a function once after a specified delay.
setInterval: Repeatedly executes a function at a specified interval until cleared.

2.Return Value:

setTimeout: Returns a timeout ID that can be used to clear the timeout with clearTimeout.
setInterval: Returns an interval ID that can be used to clear the interval with clearInterval.

3. Clearing:

setTimeout: Cleared using clearTimeout by providing the timeout ID.
setInterval: Cleared using clearInterval by providing the interval ID.

4. Use Cases:

Use setTimeout when you want to execute a function once after a delay.
Use setInterval when you want to repeatedly execute a function at regular intervals.
It's important to use these functions wisely to avoid potential issues with performance and resource utilization, especially when dealing with 
intervals or delays that are too short.
 */