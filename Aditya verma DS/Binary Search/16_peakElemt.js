// A peak element in a binary array is an element which is greater than or equal to its neighbors. 
// For an array arr, an element arr[i] is a peak element if:

// arr[i] is greater than or equal to arr[i - 1] (if i > 0).
// arr[i] is greater than or equal to arr[i + 1] (if i < n-1).
// Here's a JavaScript code example to find a peak element in a binary array using binary search:

function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // The peak element must be on the left side
            right = mid;
        } else {
            // The peak element must be on the right side
            left = mid + 1;
        }
    }

    // 'left' or 'right' now points to a peak element
    return left;
}

// Example usage:
const array = [1, 3, 20, 4, 1, 0];
const peakIndex = findPeakElement(array);

console.log(`Peak element index: ${peakIndex}, Peak element value: ${array[peakIndex]}`);
