// Check for Majority Element in a sorted array


/**
Given an array arr of N elements,  A majority element in an array arr of size N is an element that appears more than N/2 times in the array. The task is to write a function say isMajority() that takes an array (arr[] ), array’s size (n) and a number to be searched (x) as parameters and returns true if x is a majority element (present more than n/2 times).

Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
Output: True (x appears more than n/2 times in the given array)

Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
Output: False (x doesn't appear more than n/2 times in the given array)

Input: arr[] = {1, 1, 1, 2, 2}, x = 1
Output: True (x appears more than n/2 times in the given array)


 */



const isMajority = (arr, targetElement) => {

    let count = 0;
    let n = arr.length;

    for(let i = 0; i < n ; i++) {
        if(arr[i] === targetElement) {
            count++;
        }
    }

    return count > Math.floor(n / 2);
}


let arr1 = [1, 2, 3, 3, 3, 3, 10];
let x1 = 3;
console.log(isMajority(arr1, x1)); // Output: true

let arr2 = [1, 1, 2, 4, 4, 4, 6, 6];
let x2 = 4;
console.log(isMajority(arr2, x2)); // Output: false becasue 4 appears 3 times, which is not more than 8/2 = 4.

let arr3 = [1, 1, 1, 2, 2];
let x3 = 1;
console.log(isMajority(arr3,  x3)); // Output: true