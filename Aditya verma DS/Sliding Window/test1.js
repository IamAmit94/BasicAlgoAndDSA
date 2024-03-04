// Maximum Sum Subarray of size K | Sliding Window FIXED SIZE WINDOW

const maxSumSubarrayOfSizeK = (arr, k) => {
    if (k > arr.length) {
        return 'Invalid data';
    }

    let sum = 0;
    let i = 0; // start
    let j = 0; // end
    let maxSum = 0;

    while (j < arr.length) {
        sum = sum + arr[j];

        if (j - i + 1 < k) { // condition to increment the j
            j++;
        } else if (j - i + 1 === k) { // window size
            if (sum > maxSum) {
                maxSum = sum;
            }
            sum = sum - arr[i]; // moving the window forward and maintain the wind size
            i++;
            j++;
        }
    }

    return maxSum;
};

// Example usage:
const array = [1, 4, 2, 10, 2, 3, 1, 10, 20];
const k = 2;
const result = maxSumSubarrayOfSizeK(array, k);
console.log(result); // Output: 30 (sum of subarray [10, 20])
