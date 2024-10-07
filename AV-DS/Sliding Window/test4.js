// FIXED WINDOW SIZE Maximum of all subarrays of size k | Sliding Window
// we need to find the max number

const maxOfSubarraysOfSizeK = (arr, k) => {
  let i = 0, j = 0;
  let size = arr.length;
  let queue = [];  // Will store the indices of useful elements for the current window
  let resArr = [];

  while (j < size) {
    // Remove elements from the back of the queue that are smaller than the current element
    while (queue.length > 0 && arr[queue[queue.length - 1]] < arr[j]) {
      queue.pop();
    }

    // Add the current element index to the back of the queue
    queue.push(j);

    // Remove the front element if it's outside the current window
    if (queue[0] < i) {
      queue.shift();
    }

    // If we have hit the window size, record the result and slide the window
    if (j - i + 1 === k) {
      resArr.push(arr[queue[0]]);  // The element at the front of the queue is the largest in the current window

      // Slide the window forward
      i++;
    }

    // Always move j forward
    j++;
  }

  return resArr;
}

// Example usage:
const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const result = maxOfSubarraysOfSizeK(array, k);
console.log(result); // Output: [3, 3, 5, 5, 6, 7]


// 1  3 -1 ==> 3
// 3 -1 -3 ==> 3
// -1 -3 5 ==> 5
// -3 5 3  ==> 5
//  5 3 6 ==> 6
// 3 6 7 ===> 7

// 3 3 5 5 6 7







