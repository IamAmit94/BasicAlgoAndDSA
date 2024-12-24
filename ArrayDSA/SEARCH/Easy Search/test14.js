// Find element in a sorted array whose frequency is greater than or equal to n/2.

/**
 * 
Given a sorted array of length n, find the number in array that appears more than or equal to n/2 times. It is given that such element always exists.

Examples: 

Input :  2 3 3 4
Output : 3

Input :  3 4 5 5 5 
Output : 5

Input : 1 1 1 2 3
Output : 1


 */



const findMajority = (arr) => {
    let n = arr.length;
    return arr[(Math.floor(n / 2))]; 
}


console.log(findMajority([ 3, 4, 5, 5, 5  ]))