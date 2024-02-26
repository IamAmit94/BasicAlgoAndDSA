// Maximum of all subarrays of size k | Sliding Window
const maxOfSubarraysOfSizeK = (arr, k) => {
    const result = [];
    const deque = [];

    for (let i = 0; i < arr.length; i++) {
        // Remove elements from the front of the deque that are outside the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the back of the deque that are smaller than the current element
        while (deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);

        // Add the maximum element of the current window to the result
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
};

// Example usage:
const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const result = maxOfSubarraysOfSizeK(array, k);
console.log(result); // Output: [3, 3, 5, 5, 6, 7]
