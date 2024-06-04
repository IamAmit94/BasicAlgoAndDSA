// MAX/MIN in an array

const findMaxNumber = (arr) => {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    let max = arr[0]; // Initialize max with the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if the current element is greater
        }
    }

    return max;
}

const findMinNumber = (arr) => {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    let min = arr[0]; // Initialize min with the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if the current element is smaller
        }
    }

    return min;
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log("Array:", numbers);
console.log("Max number:", findMaxNumber(numbers));
console.log("Min number:", findMinNumber(numbers));
