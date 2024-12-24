// linear Search

const linearSearch  = (arr, target) => {

    for(let key of arr) {

        if(key === target) {
            return true
        }
    }
    return `Element not found !`
}


console.log(linearSearch([10, 8, 30, 4, 5],5))

// Binary Search

const binarySearch = (arr, target) => {

    let left = 0;
    let right = arr.length - 1;

    while(right >= left) {

        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target) {
            return `${arr[mid]} found at index ${mid}`;
        }
        else if(arr[mid] > target) {
            right = mid - 1;
        } else  {
            left = mid + 1;
        }
    }

    return `Element not found`
}



console.log(binarySearch([2, 3, 4, 10, 40], 10));



// Ternary Search

/**
Ternary search is a divide and conquer algorithm that can be used to find an element in an array. It is similar to binary search where we divide the array into two parts but in this algorithm, we divide the given array into three parts and determine which has the key (searched element). This algorithm also has the constraint that the array must be sorted. The time complexity for this algorithm is O(log 3 N) where 'N' is the size of the array.
 */


function ternarySearch(arr, left, right, key) {


    let left = 0;
    let right  = arr.length - 1;
    // Base condition: If the search range is invalid
    if (right >= left) {
        // Divide the array into three parts
        let mid1 = left + Math.floor((right - left) / 3);
        let mid2 = right - Math.floor((right - left) / 3);

        // Check if the key is present at mid1 or mid2
        if (arr[mid1] === key) {
            return mid1; // Return the index of the key
        }
        if (arr[mid2] === key) {
            return mid2; // Return the index of the key
        }

        // If the key is smaller than mid1, search in the left third
        if (key < arr[mid1]) {
            return ternarySearch(arr, left, mid1 - 1, key);
        }
        // If the key is larger than mid2, search in the right third
        else if (key > arr[mid2]) {
            return ternarySearch(arr, mid2 + 1, right, key);
        }
        // Else search in the middle third
        else {
            return ternarySearch(arr, mid1 + 1, mid2 - 1, key);
        }
    }

    // Return -1 if the key is not found
    return -1;
}

// Example usage
let arr = [1, 4, 6, 8, 12, 16, 18, 20, 25, 30, 35];
let key = 16;
let result = ternarySearch(arr,  key);

if (result !== -1) {
    console.log(`Element ${key} is at index ${result}`);
} else {
    console.log(`Element ${key} is not present in the array`);
}
