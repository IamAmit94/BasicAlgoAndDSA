// Find the Missing Number


/**
Given an array arr[] of size n-1 with integers in the range of [1, n], the task is to find the missing number from the first n integers.

Note: There are no duplicates in the list.

Examples: 

Input: arr[] = [1, 2, 4, 6, 3, 7, 8] , n = 8
Output: 5
Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5


Input: arr[] = [1, 2, 3, 5], n = 5
Output: 4
Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4


 */


const missingElement  = (arr) => {

    let sortedArr = arr.sort((a,b) => a - b);
    console.log('Sorted Arrr ======> ',sortedArr);

    // [1, 2, 3, 4, 6, 7, 8]
    let missingElem = [];

    // Iterate over the range from 1 to the maximum number in the sorted array
    for(let i = 1; i <= sortedArr[sortedArr.length - 1]; i++) {  // Arrays in JavaScript are zero-indexed, which means that the index of the first element is 0, the second is 1, and so on. The last element of the array has an index of length - 1. So, sortedArr.length - 1 gives the index of the last element in the array.

        // In the example where sortedArr = [1, 2, 3, 4, 6, 7, 8], sortedArr[sortedArr.length - 1] would return the value at index 6, which is 8.

        // check if the current number is missing from the array 
        if(!sortedArr.includes(i)) {
            missingElem.push(i)
        }
    }

    return missingElem;
}

console.log(missingElement([1, 2, 4, 6, 3, 7, 8]));


// Alternative approch to find the missing element in the array

const missingElementAlt = (arr) => {

    let sortedArr = arr.sort((a, b) => a - b);

    let missingElements = [];
    for(let i = 0; i < sortedArr.length - 1; i++) {

        // If the difference between consecutive numbers is more than 1, there are missing numbers
    for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
        missingElements.push(j);
    }
        // if(arr[i+1] - arr[i] > 1) {
        //     missingElement.push(arr[i] + 1);
        //     break;
        // }
    }

    return missingElements;
}


console.log(missingElementAlt([23, 5, 89, 12, 42, 56, 78, 2, 67, 34]))



// optimized approch

const optimizedAproch = (arr) => {

    // Step 1: Convert the array to a Set for fast lookups
    let numSet = new Set(arr);
    
    // Step 2: Find the minimum and maximum elements in the array
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    // Step 3: Loop through the range between min and max and find missing elements
    let missingElements = [];
    for (let i = min; i <= max; i++) {
        if (!numSet.has(i)) {
            missingElements.push(i);
        }
    }
    return missingElements;
}


console.log(optimizedAproch([23, 5, 89, 12, 42, 56, 78, 2, 67, 34])); // Output: [3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88]
