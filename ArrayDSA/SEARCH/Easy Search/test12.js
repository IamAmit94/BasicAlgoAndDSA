// Find lost element from a duplicated array


/**

Given two arrays that are duplicates of each other except one element, that is one element from one of the array is missing, we need to find that missing element.

Examples: 

Input:  arr2[] = {1, 4, 5, 7, 9}
        arr2[] = {4, 5, 7, 9}
Output: 1
1 is missing from second array.
Input: arr1[] = {2, 3, 4, 5}
       arr2[] = {2, 3, 4, 5, 6}
Output: 6
6 is missing from first array.

 */




const findMissingElement = (arr1, arr2) => {

let map1 = new Map();


// store all element of arr1 in the map
for(let elem of arr1) {
    map1.set(elem, 1)
}

// check if any element of arr2 is missing in arr1
for(let elem of arr2) {
    if(!map1.has(elem)) {
        return elem; // Return the missing element from arr2
    }
}

return -1

}


let A = [ 2, 3, 4, 5 ];
let B = [ 2, 3, 4, 5, 6 ];
console.log(findMissingElement(A, B))