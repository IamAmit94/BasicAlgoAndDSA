// Move all Negative number to begning and positive to end with constant extra space

/**
An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Examples : 

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5


 */

// Solve using 2 pointer problem
const sortArrElem = (arr) => {

    let left = 0;
    let right = arr.length - 1;

    // Iterate the array from left to right

    while(left <= right) {
        // condition to check if left and right element are negative

        if(arr[left] < 0  && arr[right] < 0) {
            left += 1;
        }

        // condition to check if the left is positive and right element are negative
        else if(arr[left] > 0 && arr[right] < 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }
        // condtion to check if both are positve
        else if(arr[left] > 0 && arr[right] > 0){
            right -= 1;
            
        } else {
            left += 1;
            right -= 1;
        }
    }

    return arr;

}


console.log(sortArrElem([-12, 11, -13, -5, 6, -7, 5, -3, -6]));



const inbuiltSort = (arr) => {

    arr.sort((a, b) => a - b);

    return arr;
}

// console.log(inbuiltSort([-12, 11, -13, -5, 6, -7, 5, -3, -6]))