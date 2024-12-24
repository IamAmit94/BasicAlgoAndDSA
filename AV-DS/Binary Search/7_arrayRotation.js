/**
 * calculate the mid element in the array and compare the mid element to it's adjecent element
 * 
 * 
 * 
 * if(start<mid) then start array is sorted and we have to go to the unsorted array
 * if(start>)
 * 
 * we have to find the minimum element in the array and return its index. The index of the minimum element will be the number of rotation of array.
 * The minimum element will always lies btw the 2 greater element ie it's left and right both element will be greater
 * 
 * 
 * number of rotation = index of minimum element
 * 
 * leetCode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/1452210082/
 * 

 */

/**
 * calculate the mid element in the array and compare the mid element to it's adjecent element
 * 
 * 
 * 
 * if(start<mid) then start array is sorted and we have to go to the unsorted array
 * if(start>)
 * 
 * we have to find the minimum element in the array and return its index. The index of the minimum element will be the number of rotation of array.
 * The minimum element will always lies btw the 2 greater element ie it's left and right both element will be greater
 * 
 * 
 * number of rotation = index of minimum element
 * 
 * 

 */

const countRotations = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // If the array is not rotated, return 0
        if (arr[start] <= arr[end]) {
            return arr[start];
        }

        const mid = Math.floor((start + end) / 2);
   
        const next = (mid + 1) % arr.length; // incase if the mid is 7 then (7+1)/8 = 0 then we will move to the 0 index

        const prev = (mid + arr.length - 1) % arr.length;


        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            
            return arr[mid]; // min element
        } else if (arr[mid] <= arr[end]) { // if this is sorted then search the element of mid in unsorted array
            end = mid - 1;

        } else if (arr[mid] >= arr[start]) { // if this is sorted then search the element of mid in unsorted array
            start = mid + 1;

        }
    }

    return -1; // Return -1 if the array is not rotated
};

let arr = [3,4,5,1,2]; // 1
let arr2 = [4,5,6,7,0,1,2]; // 0
let arr3 = [11,13,15,17] // 11
let arr4 = [4,5,1,2,3]; // 1
const rotations = countRotations(arr);

console.log(`Number of rotations: ${rotations}`);
console.log(`Number of rotations:`, countRotations(arr2))
console.log(`Number of rotations:`, countRotations(arr3));
console.log(`Number of rotations:`, countRotations(arr4))


