// Sort an array of 0s, 1s, and 2s

/**
Sort an array of 0s, 1s and 2s – Dutch National Flag Problem
Last Updated : 14 Oct, 2024
Given an array arr[] consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

This problem is the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

Given n balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

Examples:

Input: arr[] = {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}
Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.


Input: arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.
 */


// Solving using 3 pointer problm
const sortArrayElement = (arr) => {
let lo = 0;
let hi = arr.length - 1;
let mid = 0;

while(mid <= hi) {
    if(arr[mid] === 0) {
        [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
        lo++;
        mid++;
    }
    else if(arr[mid] === 1) {
        mid++;
    }
    else {
        [arr[mid], arr[hi]] = [arr[hi], arr[mid]]
        hi--;
    }
}

return arr;
}

console.log(sortArrayElement([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))