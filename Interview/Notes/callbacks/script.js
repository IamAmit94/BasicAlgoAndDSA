// What is callback function in JavaScript ?
// passing the function to another function as an parameter is known as callback. And this give the power to make the js asynchronous



// setTimeout(function () {
//     console.log('seTimeout Timmer  2 sec')
// },2000);


// function x(y) {
//     console.log('X is called');
//     y()
// }

// x(function y() {
//     console.log('Y is called')
// });
// JavaScript is a synchronous and single-threaded langauge

// Blocking the main thread

// Power of Callbacks ?

// Deep about Event listners

function addEventListner () {
    let count = 0
document.getElementById('clickMe').addEventListener('click', function xyz() {
    console.log('Button is clicked ',++count)
})
}

addEventListner()

// Clousers Demo with Event listner

// Scope demo with Event listner

// Garbage collection & remove EventListners


// Why do we need to remove the event listner ?
// event listner is heavy means takes lot of memory, when ever you attach the event listner
// it form the closure and when the callstack is empty it still do not free the memeory and
// the value store in the call stack