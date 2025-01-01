// Array Reverse – Complete Tutorial


/**
Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

Examples:

Input: arr[] = {1, 4, 3, 2, 6, 5}  
Output: {5, 6, 2, 3, 4, 1}
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.


Input: arr[] = {4, 5, 1, 2} 
Output: {2, 1, 5, 4}
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.

 */



const arrayReverse = (arr) => {
    const copyArr = [...arr];  // Create a copy of the array
    return copyArr.reverse();  // Reverse the copy
}

console.log(arrayReverse([1, 4, 3, 2, 6, 5]));  // Output: [5, 6, 2, 3, 4, 1]



const reverArrResult = (arr) => {

    let reverseArr = [];

    for(i = arr.length - 1; i>=0; i--) {
        reverseArr.push(arr[i])
    }

    return reverseArr;
}


console.log(reverArrResult([1, 4, 3, 2, 6, 5]))




const reverseArr = (arr1) => {
    let left = 0;
    let right = arr1.length - 1;

    while(right > left) {

        [arr1[left], arr1[right]] = [arr1[right],arr1[left]];

        left ++;
        right --;
    }

    return arr1;
}

let arr1 = [1, 4, 3, 2, 6, 5];

console.log(reverseArr(arr1))

