// Maximum Sum Subarray of size K | Sliding Window FIXED SIZE WINDOW

const maxSumSubarrayOfSizeK = (arr, k) => {
    if (k <= 0 || k > arr.length) {
        return "Invalid input";
    }

    let maxSum = 0;
    let currentSum = 0;

    // Calculate sum of the first window
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    // Slide the window through the array
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum + arr[i] - arr[i - k]; // Add the next element and subtract the first element of the window
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

// Example usage:
const array = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 2;

const result = maxSumSubarrayOfSizeK(array, k);
console.log(result); // Output: 24 (sum of subarray [2, 10, 2, 3])
