// 2nd MIN/MAX in array


const findSecondMinNumber = (arr) => {
    if (arr.length < 2) {
        return null; // Return null if the array has less than two elements
    }

    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }

    if (secondMin === Infinity) {
        return null; // Return null if there is no second minimum
    }

    return secondMin;
}

const findSecondMaxNumber = (arr) => {
    if (arr.length < 2) {
        return null; // Return null if the array has less than two elements
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    if (secondMax === -Infinity) {
        return null; // Return null if there is no second maximum
    }

    return secondMax;
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log("Array:", numbers);
console.log("Second min number:", findSecondMinNumber(numbers));
console.log("Second max number:", findSecondMaxNumber(numbers));
