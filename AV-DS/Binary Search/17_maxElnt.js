// Find maximum element in Bitonic Array
// To find the maximum element in a bitonic array using binary search, you can 
// modify the standard binary search approach. A bitonic array is an array that starts with an increasing sequence,
//  reaches a peak element (the maximum), and then becomes a decreasing sequence.

// Here's a JavaScript code example to find the maximum element in a bitonic array:

const findMaxInBitonicArray = (arr) => {
    const n = arr.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the maximum element
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        }

        // If the element to the right of mid is greater, the peak is on the right
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        }
        // If the element to the left of mid is greater, the peak is on the left
        else {
            right = mid - 1;
        }
    }

    // The loop should always find a peak, so this line is not expected to be reached
    return -1;
};

// Example of usage with a bitonic array
const bitonicArray = [1, 3, 8, 12, 4, 2];

const maxElement = findMaxInBitonicArray(bitonicArray);

console.log(`Maximum element in the bitonic array: ${maxElement}`);
