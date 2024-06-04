// To find the minimum difference element in a sorted array using binary search, you can perform a modified binary search.
//  The idea is to find the element in the array that is closest to the given target. 
//  Here's a JavaScript code example:

const findMinDiffElement = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let minDiff = Infinity;
    let minDiffElement = null;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentDiff = Math.abs(arr[mid] - target);

        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            minDiffElement = arr[mid];
        }

        if (arr[mid] === target) {
            return arr[mid]; // Found an exact match, no need to continue
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return minDiffElement;
};

// Example of usage with a sorted array
const sortedArray = [1, 3, 6, 9, 11, 15, 18, 21];
const targetElement = 14;

const minDiffElement = findMinDiffElement(sortedArray, targetElement);

console.log(`Minimum difference element to ${targetElement}: ${minDiffElement}`);
