/*********************************************
 *
 *              Recursion in js
 *
 * *******************************************
 */

// Recursion: when funx call itself
// Otherwise it will get called for infinite time
// if a function call itself then there must be an end point

let counter = 1;
function demo(number) {
  // function defination
  if (counter > number) {
    return "End of recursion";
  }
  console.log("hello printing :", counter);
  counter++;

  demo(number); // recursion funx
}

demo(8); // function call
