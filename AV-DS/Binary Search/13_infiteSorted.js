const findNextPositionInInfiniteArray = (arr, target) => {
    let left = 0;
    let right = 1; // Initialize the right pointer to a small range

    // Extend the range until the target is found or surpassed
    while (arr[right] < target) {
        left = right;
        right =right * 2; // Double the range
    }

    // Perform binary search in the extended range
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found in the array
};

// Example of usage with a simulated infinite array
const infiniteArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, /*...*/];
const targetElement = 15;

const nextPosition = findNextPositionInInfiniteArray(infiniteArray, targetElement);

console.log(`Next position of ${targetElement} in the infinite array: ${nextPosition}`);
