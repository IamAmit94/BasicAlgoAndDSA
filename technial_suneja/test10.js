/*********************************************
 *
 *             sorting using Recursion in js
 *
 * *******************************************
 */
// Advance revursive funx
// sorting using recusrion func
// [2,3,1,4] ---> default case
// [2,1,3,4] --> case 1
// [1,2,3,4]  --> final output

let myArray = [2, 3, 1, 4];
let newUpdatedArray = [];
let i = 0;
let j = 1;

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

// isSorted([2, 3, 1, 4]);

function sortCheck(array) {
  console.log("array====", array);
  if (isSorted(array)) {
    console.log(" issorted array====", array);
    newUpdatedArray = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortCheck(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortCheck(array);
  }
}

sortCheck(myArray);
console.log("result======= ", newUpdatedArray);
