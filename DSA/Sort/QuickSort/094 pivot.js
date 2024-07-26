

// Version with ES2015 Syntax
const pivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let pivotValue = arr[start]; // Store the pivot value
  let swapIndex = start; // Initialize the swap index

  for (let i = start + 1; i <=end; i++) {
      if (arr[i] < pivotValue) { // Compare to pivot value
          swapIndex++; // Move the swap index to the right
          // Swap elements
          [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
  }

  // Swap the pivot element with the element at the swap index
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex; // Return the new index of the pivot
}

// Example usage
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // This will log the new index of the pivot


// [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3] //swap and swap++
// [4,2,1,8,5,7,6,3] //swap and swap++
// [4,2,1,8,5,7,6,3] // 4 will be comparing to the rest element since all are greater nothing happn
// [4,2,1,3,5,7,6,8] // since 3 is smaller then swap
// [3,2,1,4,5,7,6,8] // Now our pivot is in right position


