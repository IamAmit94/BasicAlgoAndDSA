/*********************************************
 *
 *             soring using Recursion in js
 *
 * *******************************************
 */

// Helper Recursive function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] --> output odd
// number%2 ! === 0

// we will be calling the funx inside the funx to perform the operation

function findOdd(array) {
  let result = [];

  function helperRecursive(inputArray) {
    console.log("calling.......", inputArray);
    if (inputArray.length === 0) {
      return;
    } else if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0]);
      console.log("result====", result);
    }
    helperRecursive(inputArray.slice(1));
  }
  helperRecursive(array); // 1st time calling
  //   console.log("After  result====", result);
  return result;
}

const outputData = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(outputData);
