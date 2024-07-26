// 2nd MIN/MAX in array


const findSecondMinNumber = (arr) => {
    // Check if the array has less than two elements
    if (arr.length < 2) {
        return null; // Return null if the array has less than two elements
    }

    // Initialize the minimum and second minimum values to Infinity
    let min = Infinity;
    let secondMin = Infinity;

    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is less than the current minimum
        if (arr[i] < min) {
            secondMin = min; // Update the second minimum to the current minimum
            min = arr[i];    // Update the minimum to the current element
        // If the current element is less than the second minimum and not equal to the minimum
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i]; // Update the second minimum to the current element
        }
    }

    // If the second minimum value was not updated, return null
    if (secondMin === Infinity) {
        return null; // Return null if there is no second minimum
    }

    // Return the second minimum value found in the array
    return secondMin;
}


const findSecondMaxNumber = (arr) => { 
    // Define an arrow function named findSecondMaxNumber which takes an array 'arr' as its parameter

    if (arr.length < 2) {
        return null; // Return null if the array has less than two elements since a second maximum doesn't exist
    }

    let firstMax = -Infinity; // Initialize the variable firstMax to the smallest possible number
    let secondMax = -Infinity; // Initialize the variable secondMax to the smallest possible number

    for (let i = 0; i < arr.length; i++) { 
        // Loop through each element in the array

        if (arr[i] > firstMax) {
            secondMax = firstMax; // Update secondMax to the current firstMax
            firstMax = arr[i]; // Update firstMax to the current array element
        } else if (arr[i] > secondMax && arr[i] !== firstMax) {
            // Check if the current element is greater than secondMax and not equal to firstMax
            secondMax = arr[i]; // Update secondMax to the current array element
        }
    }

    if (secondMax === -Infinity) {
        return null; // Return null if there is no second maximum (i.e., all elements are the same)
    }

    return secondMax; // Return the second maximum value found in the array
}


// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log("Array:", numbers);
console.log("Second min number:", findSecondMinNumber(numbers));
console.log("Second firstMax number:", findSecondMaxNumber(numbers));
