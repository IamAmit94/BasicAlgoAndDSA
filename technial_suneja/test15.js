/****************************************
 *
 *          SORTING
 *          SELECTION sort OPTIMIZED FORM
 *
 * ***************************************/

// Selection Sort
// In the selection sort consider the 1st element to be the smallest and then compare the 1st element to the remaning element and if it found that the pointer element is grater then the remaining element then swap the element

// [0,2,34,22,10,19]

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Assume the first element is the smallest
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        // If we find a smaller number than current minimum, update minIndex
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
};

const result = selectionSort([0, 2, 34, 22, 10, 19]);

console.log(`result =====> `, result);

//  p
// [0, 2, 34, 22, 10, 19]
//     p
// [0, 2, 34, 22, 10, 19]
//         p
// [0, 2, 34, 22, 10, 19]
//         p
// [0, 2, 22, 10, 19, 34]
//        p
// [0, 2, 10, 19, 22, 34]



