
const binarySearchDescending = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return `Element ${target} found at index ${mid}`;
        } else if (arr[mid] > target) {
            left = mid + 1; // Adjust for descending order
        } else {
            right = mid - 1; // Adjust for descending order
        }
    }

    return `Element ${target} not present in the array`;
};

const descendingSortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const targetElement = 2;

const result = binarySearchDescending(descendingSortedArray, targetElement);
console.log(`Result: ${result}`);

/**const agnosticBinarySearch = (arr, element, typeOfArray) => {
    let left = 0;
    let right = arr.length - 1;
    console.log(`Binary search for "${typeOfArray}"`)
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === element) {
            return `Element ${element} found at index ${mid}`;
        } else if (arr[mid] > element && typeOfArray === 'ascending') {
            right = mid - 1;
        } else if (arr[mid] < element && typeOfArray === 'ascending') {
            left = mid + 1;
        } else if (arr[mid] > element && typeOfArray === 'descending') {
            left = mid + 1;
        } else if (arr[mid] < element && typeOfArray === 'descending') {
            right = mid - 1;
        }
    }

    return `Element ${element} not present in array!`;
};

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 1;

const determineArrayType = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return 'descending';
        } else if (arr[i] < arr[i + 1]) {
            return 'ascending';
        }
    }
};

const arrayType = determineArrayType(sortedArray);
const result = agnosticBinarySearch(sortedArray, targetElement, arrayType);
console.log(`Result: ${result}`); */