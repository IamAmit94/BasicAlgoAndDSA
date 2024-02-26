// Search An Element in Bitonic Array
// Searching for an element in a bitonic array involves performing 
// two binary searches: one to find the peak element (maximum) and another to search for the element in 
// either the increasing or decreasing subarray. Here's a JavaScript code example


const binarySearchIncreasing = (arr, target, left, right) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
};

const binarySearchDecreasing = (arr, target, left, right) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found
        } else if (arr[mid] < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1; // Element not found
};

const searchInBitonicArray = (arr, target) => {
    const n = arr.length;

    // Find the peak element (maximum) in the bitonic array
    let left = 0;
    let right = n - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            right = mid; // Peak is in the left subarray
        } else {
            left = mid + 1; // Peak is in the right subarray
        }
    }

    const peakIndex = left; // Index of the peak element

    // Search for the target in the increasing subarray (left of peak)
    const increasingResult = binarySearchIncreasing(arr, target, 0, peakIndex - 1);

    if (increasingResult !== -1) {
        return increasingResult; // Element found in the increasing subarray
    }

    // Search for the target in the decreasing subarray (right of peak)
    const decreasingResult = binarySearchDecreasing(arr, target, peakIndex, n - 1);

    return decreasingResult; // Element found in the decreasing subarray (if present)
};

// Example of usage with a bitonic array
const bitonicArray = [1, 3, 8, 12, 4, 2];
const targetElement = 4;

const result = searchInBitonicArray(bitonicArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}`);
} else {
    console.log(`Element ${targetElement} not found in the bitonic array`);
}
