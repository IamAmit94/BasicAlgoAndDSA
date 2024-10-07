// VARIABLE SIZE WINDOW Sliding Window | Largest Subarray of sum K PART 1

const largestSubarraySumK = (arr, k) => {

  let i = 0,
    j = 0;
  let total = 0;
  let tempResult = 0;
  let size = arr.length;


  while (j < size) {
    total = total + arr[j];

    // sum is less than total
    if (total < k) {
      j++;
    } else if (total === k) { // sum is equal to total
      tempResult = Math.max(j - i + 1, tempResult);
      j++;
    } else if (total > k) { // sum is greater than total
      while (total > k) {
        total = total - arr[i];
        i++;
      }
      j++;
    }
  }

  return tempResult;
};

// Example usage:
// const array = [10, 5, 2, 7, 1, 9];
// const k = 15;

const array = [4,1,1,1,2,3,5];
const k = 5;

const result = largestSubarraySumK(array, k);
console.log(result); // Output: [5, 2, 7, 1]
