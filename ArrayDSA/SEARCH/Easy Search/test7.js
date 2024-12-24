// Find common elements in three sorted arrays


/**

Given three sorted arrays in non-decreasing order, print all common elements in these arrays.

Note: In case of duplicate common elements, print only once.

Examples: 

Input: A[] = {1, 5, 10, 20, 30} , B[] = {5, 13, 15, 20}, C[] = {5, 20} 
Output: 5 20
Explanation: 5 and 20 are common in all the arrays.


Input: A[] = {2, 5, 10, 30}, B[] = {5, 20, 34}, C[] = {5, 13, 19} 
Output: 5 
Explanation: 5 occurs multiple times in all the three arrays but it will be printed once.
 */
let A = [1, 5, 10, 20, 30];
let B = [5, 13, 15, 20];
let C = [5, 20];


const commonElement = (A, B, C) => {


    // create a map to store the common elements
    let mp = new Map();


    //Mark all element in the 1st array with the value = 1
    A.forEach(element => {
        // console.log('elemet----',element)
        mp.set(element, 1)
    });

    // Mark all the element which are common in 1st and 
    // 2nd array with the value 2

    B.forEach(element => {
    
        if(mp.has(element) && mp.get(element) === 1) {
            mp.set(element, 2)
        }
    });

    // Mark all the element which are common in 1st and 2nd
    // array with the value 2

    C.forEach(element => {

        if(mp.has(element) && mp.get(element) === 2) {
            mp.set(element, 3)
        }
    })
    

    // Now store all the common elements
    let commonElements = [];
    mp.forEach((value, key) => {
        if(value === 3) {
            commonElements.push(key)
        }
    })

    console.log(mp)
    console.log(commonElements);

    return commonElements;
}




// let result = commonElement(A, B, C)
// console.log('Common elements in the 3 sorted Array are: ',result.join(" "));

/**
 * The time complexity for the above code is :-
 * 
Time complexity: O(n1*log(n1) + n2*log(n1) + n3*log(n1)) = O((n1 + n2 + n3)*log n1),

where n1, n2 and n3 are sizes of A[], B[] and C[] respectively.
This is because initially we are adding all the elements of A[] in the map, resulting in n1*log(n1).
Then, for all elements in B[] and C[] we need to find all elements in map, resulting in n2*log(n1) + n3*log(n1).
 */


// Alternative Method for the above code:-

// We can also sort this problem using the 3 pointer solving technique:-

const threePointerComElm = (A, B, C) => {
  console.log("A ====", A, "B========", B, "C===========", C);
  let i = 0,
    j = 0,
    k = 0;
  let common = [];

  // Iterate through 3 array while all array have elements

  while (i < A.length && j < B.length && k < C.length) {
    // Find common element among them all
    if (A[i] === B[j] && B[j] === C[k]) {
      common.push(A[i]);

      i++;
      j++;
      k++;

      // Skip the duplicate elements in A[]

      while (i < A.length && A[i] === A[i - 1]) i++;
      // Skip the duplicate elements in B[]
      while (j < B.length && B[j] === B[j - 1]) j++;
      // Skip the duplicate elements in C[]
      while (k < C.length && C[k] === C[k - 1]) k++;
      // If A[i] < B[j], then ith element cannot be common
    } else if (A[i] < B[j]) i++;
     // If B[j] < C[k], then jth element cannot be common
    else if (B[j] < C[k]) j++;
    // If C[k] is smallest, then kth element cannot be common
    else k++;
  }

  console.log("Common ====== ", common);
  return common;
};

let result2 = threePointerComElm(A, B, C);
console.log("Common elements in the 3 sorted Array are: ", result2.join(" "));