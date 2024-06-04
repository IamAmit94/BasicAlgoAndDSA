//  In order to check the order of the array we follow
/**
 *   arr[0] > arr[1]  ===> Assending sort     ex: [1,2]
 *   arr[0] < arr[1]  ===> Decending sort     ex: [2,1]
 * 
 *  BASED ON THE ABOVE WE CAN PERFORM THE BINARY SEARCH ON THE ARRAY
 * 
 * agnostic: This might refer to algorithms or functions that work on arrays regardless of their sorting order (ascending or descending). 
 * Examples include order-agnostic binary search or sorting algorithms that handle both orderings.
 * 
 */


const agnosticBinarySearch = (arr, element, typeOfArray) => {
    let left = 0;
    let right = arr.length - 1;
    console.log(`Binary search for "${typeOfArray}"`)
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

     switch(typeOfArray) {
        case 'ascending':
            if (arr[mid] === element) {
                return `Element ${element} found at index ${mid}`;
            } else if (arr[mid] > element) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            break;
        case 'descending':
            if (arr[mid] === element) {
                return `Element ${element} found at index ${mid}`;
            } else if (arr[mid] > element) {
                left = mid + 1; // Adjust for descending order
            } else {
                right = mid - 1; // Adjust for descending order
            }
            break;
        default:
            return 'Invalid array provided'
     }
    }

    return `Element ${element} not present in array!`;
};

// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortedArray =  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
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
console.log(`Result: ${result}`);
