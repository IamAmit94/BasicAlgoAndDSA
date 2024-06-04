// Largest Subarray of sum K 

const largestSubarraySumK = (arr, k) => {
    let maxLen = 0;
    let currentSum = 0;
    const sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum === k) {
            maxLen = i + 1; // Entire array is the subarray
        }

        if (sumMap.has(currentSum - k)) {
            maxLen = Math.max(maxLen, i - sumMap.get(currentSum - k));
        }

        if (!sumMap.has(currentSum)) {
            // Store the first occurrence of the current sum
            sumMap.set(currentSum, i);
        }
    }

    return maxLen;
};

// Example usage:
const array = [1, -1, 5, -2, 3];
const k = 3;

const result = largestSubarraySumK(array, k);
console.log(result); // Output: 4 (subarray: [1, -1, 5, -2])
