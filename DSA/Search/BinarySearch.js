// Description: Works on sorted arrays by repeatedly dividing the search space in half.

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         return mid; // Return the index of the target if found
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return -1; // Return -1 if the target is not found
//   }



// refactored version

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while(arr[mid] !== target && left <= right) {
    if(target < arr[mid]) { // greater
      right = mid - 1;
    
  } else {
    left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
}
return arr[mid] === target ? mid : -1;
}
  

  let array = [8,9,10,18,19,25,35,43,65,88,99];
  let targetElement = 88;

  const result = binarySearch(array, targetElement);
  console.log(result)


// worst-case performance ---- O(log n)
// best-case performance ---- O(1)
// average-case performance ---- O(log n)
// worst-case space complexity ---- O(1)