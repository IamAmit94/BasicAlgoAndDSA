// Index of First `1` in a Binary Sorted Infinite Array

const findFirstOneIndexInInfiniteArray = (arr, target) => {
    let left = 0;
    let right = 1; // Initialize the right pointer to a small range
    let result = -1

    // Extend the range until the first '1' is found or surpassed
    while (arr[right] === 0) {
        left = right;
        right *= 2; // Double the range
    }

    // Perform binary search in the extended range
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid
            right = mid - 1
            // return mid; // Found the first '1' at index mid
        } else if (arr[mid] > target) {
            right = mid - 1; // Search in the left half for the first '1'
        } else {
            left = mid + 1; // Search in the right half
        }
    }

    return result;
};

// Example of usage with a simulated infinite array
const infiniteBinaryArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 /*...*/];
const element = 1;

const firstOneIndex = findFirstOneIndexInInfiniteArray(infiniteBinaryArray, element);

console.log(`Index of the first '1' in the infinite binary array: ${firstOneIndex}`);
