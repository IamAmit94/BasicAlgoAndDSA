// WAP Find a Fixed Point (Value equal to index) in a given array

/**

Given an array of n distinct integers sorted in ascending order, write a function that returns a Fixed Point in the array, if there is any Fixed Point present in the array, it returns -1. Fixed Point in an array is an index i such that arr[i] equals i. Note that integers in the array can be negative. 

Examples: 

Input: arr[] = {-10, -5, 0, 3, 7}
Output: 3  
Explanation: arr[3] == 3 

Input: arr[] = {0, 2, 5, 8, 17}
Output: 0  
Explanation: arr[0] == 0 

Input: arr[] = {-10, -5, 3, 4, 7, 9}
Output: -1  
Explanation: No Fixed Point
 */

// ! using LINEAR SEARCH


    const linearSearch = (arr, ) =>
    {
        
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i] == i)
                return `Fixed point element in array is ${arr[i]} with index ${i}`;
        }
    
        /* If no fixed point present 
        then return -1 */
        return -1;
    }



console.log(linearSearch([-10, -1, 0, 3, 10, 11, 30, 50, 100]));


