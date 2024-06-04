const countOccurrencesBs = (arr, element) => {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;

    // Find the first occurrence
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === element) {
            firstOccurrence = mid;
            right = mid - 1; // Move left to find the first occurrence
        } else if (arr[mid] > element) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (firstOccurrence === -1) {
        // Element not found, return 0 occurrences
        return 0;
    }

    // Find the last occurrence
    left = firstOccurrence;
    right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === element) {
            left = mid + 1; // Move right to find the last occurrence
        } else if (arr[mid] > element) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // Calculate the count based on the first and last occurrences
    return left - firstOccurrence;
};

let sortedArray = [2, 4, 10, 10, 10, 18, 20];
let targetElement = 10;

const occurrences = countOccurrencesBs(sortedArray, targetElement);
console.log(`Occurrences of ${targetElement}: ${occurrences}`);
