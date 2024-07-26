// Variable Size Sliding Window | Largest Subarray of sum K PART 1

const largestSubarraySumK = (arr, k) => {
    let maxLen = 0; // Initialize the maximum length of the subarray with the sum k
    let currentSum = 0; // Initialize the cumulative sum
    let startIdx = 0; // Initialize the starting index of the subarray with the sum k
    const sumMap = new Map(); // Create a map to store the first occurrence of each cumulative sum
    let subarray = []; // Initialize the subarray to store the result

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]; // Add the current element to the cumulative sum

        if (currentSum === k) {
            maxLen = i + 1; // Update maxLen to the current length since currentSum equals k
            startIdx = 0; // The subarray starts from index 0
            subarray = arr.slice(startIdx, i + 1); // Extract the subarray from 0 to i
        }

        if (sumMap.has(currentSum - k)) {
            let newLen = i - sumMap.get(currentSum - k); // Calculate the length of the new subarray
            if (newLen > maxLen) { // Check if the new subarray is longer than the previous one
                maxLen = newLen; // Update maxLen
                startIdx = sumMap.get(currentSum - k) + 1; // Update startIdx to the new subarray's start
                subarray = arr.slice(startIdx, i + 1); // Extract the new subarray
            }
        }


        if (!sumMap.has(currentSum)) {
            sumMap.set(currentSum, i); // Store the first occurrence of the current cumulative sum
        }
    }

    return subarray; // Return the largest subarray found
};


// Example usage:
const array = [10, 5, 2, 7, 1, 9];
const k = 15;

const result = largestSubarraySumK(array, k);
console.log(result); // Output: [5, 2, 7, 1]

