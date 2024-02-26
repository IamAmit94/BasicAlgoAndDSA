// Index of First 1 in a Binary Sorted Infinite Array

const findFirstOneIndexInInfiniteArray = (arr) => {
    let left = 0;
    let right = 1; // Initialize the right pointer to a small range

    // Extend the range until the first '1' is found or surpassed
    while (arr[right] === 0) {
        left = right;
        right *= 2; // Double the range
    }

    // Perform binary search in the extended range
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
            return mid; // Found the first '1' at index mid
        } else if (arr[mid] === 1) {
            right = mid - 1; // Search in the left half for the first '1'
        } else {
            left = mid + 1; // Search in the right half
        }
    }

    return -1; // '1' not found in the array
};

// Example of usage with a simulated infinite array
const infiniteBinaryArray = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, /*...*/];

const firstOneIndex = findFirstOneIndexInInfiniteArray(infiniteBinaryArray);

console.log(`Index of the first '1' in the infinite binary array: ${firstOneIndex}`);
