/****************************************
 *
 *          SORTING
 *          Bubble sort OPTIMIZED FORM
 *
 * ***************************************/

// Bubble Sort
//A sorting technique where the largest value pop up at the top
// Time complexity o(n^2)

let myArray = [5, 1, 2, 3, 4];


const bubbleSort = (array) => {
  //   console.log("================= Given Array ======>", array);
  for (let i = array.length; i > 0; i--) {
    console.log("==== Outer Array ====", i);
    let isSwapped;
    for (let j = 0; j < i - 1; j++) {
      //   console.log("SWAP Inner Array ====>", array);
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return array;
};

const result = bubbleSort(myArray);
console.log(result);

/**
 * [5, 3, 4, 1, 2]
 * [3, 5, 4, 1, 2]
 * [3, 4, 5, 1, 2]
 * [3, 4, 1, 5, 2]
 * [3, 4, 1, 2, 5]
 *
 * [3, 1, 4, 2, 5]
 * [3, 1, 2, 4, 5]
 * [1, 3, 2, 4, 5]
 * [1, 2, 3, 4, 5]
 */
