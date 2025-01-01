// Given an array, the task is to cyclically right-rotate the array by one. 

// Examples:  

// Input: arr[] = [1, 2, 3, 4, 5] 
// Output: [5, 1, 2, 3, 4]


// Input: arr[] = [2, 3, 4, 5, 1]
// Output: [1, 2, 3, 4, 5]




// swap the array using the two pointer technique
// const reverseArrayByOne = (arr) => {
//     let i = 0, j = arr.length-1;
//     while(i !== j) {
//         [arr[i], arr[j]] = [arr[j],arr[i]];
//         i++;
//     }

// return arr;

// }




const reverseArrayByOne = (arr) => {
    const lastElement =arr[arr.length  - 1];

    for(let i = arr.length - 1; i>=0; i--) {
        arr[i] =  arr[i-1]
    }
    arr[0] = lastElement;
    console.log('kkkk',arr);
    return arr;
}


console.log(reverseArrayByOne([1, 2, 3, 4, 5]))