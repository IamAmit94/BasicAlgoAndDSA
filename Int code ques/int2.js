// REVERSE ARRAY

// Original array
// const originalArray = [1, 2, 3, 4, 5];
// console.log('Orignal Array--->', originalArray)
// // Reversing the array
// const reversedArray = originalArray.reverse();


// console.log("Reversed array:--->", reversedArray);


// reverse the array without using the inbuilt js function

const reverseArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let reversedArr = arr.slice(); // Create a copy of the original array
    
    // Swap elements from start and end positions
    while (start < end) {
        // Swap elements
        // let temp = arr[start];
        // arr[start] = arr[end];
        // arr[end] = temp;
        
        [arr[start], arr[end]] = [arr[end], arr[start]]

        // Move pointers
        start++;
        end--;
    }
    
    return arr;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log("Original array:==>", originalArray);
console.log("Reversed array:===> ", reversedArray);
