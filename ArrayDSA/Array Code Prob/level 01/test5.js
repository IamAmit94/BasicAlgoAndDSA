// Duplicate Element in Array

// Given an array of n integers. The task is to find all elements that have more than one occurrences. The output should only be one occurrence of a number irrespective of the number of occurrences in the input array.

// Examples: 

// Input: {2, 10, 10, 100, 2, 10, 11, 2, 11, 2}
// Output: {2, 10, 11}


// Input: {5, 40, 1, 40, 100000, 1, 5, 1}
// Output: {5, 40, 1}


const duplicateElementInArr = (arr) => {

    let seen = new Set();
    let duplicateElement = [];


    for(let i = 0; i < arr.length; i++) {
        if(seen.has(arr[i])) {
            duplicateElement.push(arr[i])
        } else {
            seen.add(arr[i])
        }
    }

    return duplicateElement;
}



console.log(duplicateElementInArr([2, 10, 10, 100, 2, 10, 11, 2, 11, 2]))