// Maximum and minimum of an array using minimum number of comparisons


/**
Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Examples:

Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9


Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35
 */


// inbuilt JS funx
const findMinMax = (arr) => {

    const minMax = {};

    let sortedArr = arr.sort((a, b) => a - b);


    minMax.minElem = arr[0];
    minMax.maxElem = arr[arr.length - 1];

    return minMax;

}


console.log(findMinMax([1000, 11, 445, 1, 330, 3000]))


// without inbuilt js inbuilt funx

const findMinAndMax = (arr) => {

    let minMax = {};

    let min = Infinity;
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }

        if(arr[i] > max) {
            max = arr[i]
        }  
    }

    minMax.min = min;
    minMax.max = max;

    return minMax
}


console.log(findMinAndMax([1000, 11, 445, 1, 330, 3000]))