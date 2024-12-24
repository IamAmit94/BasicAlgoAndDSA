// WAP  to find the minimum (or maximum) element of an array


// JavaScript code for the approach

// Function to find minimum and maximum values in an array
const findMinMax = (arr) => {

    // Implemented inbuilt function to sort array
      arr.sort((a, b) => a - b);

    return { 
        min: arr[0],
        max: arr[arr.length - 1]
     };
}

// Example usage
const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
const { min, max } = findMinMax(arr);
console.log(`min ==> ${min} max ===> ${max}`); // Output: min-1 max-423
// Time complexity : O(n log(n))

// INBUILT FUNX

const findMaxMinArr = (arr) => {
 
    
    let minRes = maxRes = arr[0];
    

    for(let elem of arr) {
        minRes = Math.min(minRes, elem);
        maxRes = Math.max(maxRes, elem)
    }



    return {
        minElem : minRes,
        maxElem : maxRes
    };
}


console.log(findMaxMinArr([12, 1234, 45, 67, 1 ]));





// ! find MIN and MAX in array without using the inbuilt function


const findMaxMin = (arr) => {


    let min = arr[0];
    let max = arr[0];


    for(let elem of arr) {

        if(arr[elem] > max) {
            max = arr[elem]
        }

        if(arr[elem] < min) {
            min = arr[elem]
        }
    }

    return {
        minElement : min,
        maxElement : max
    }
}



console.log('without inbuilt method -------- ',findMaxMin([3, 5, 1, 9, 2, 8]));