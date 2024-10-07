// function print(n) {

//     if(n===0) {
//         return
//     }
//     // console.log('n-1 to 1----',n)
//     print(n-1)
//     console.log('1 to n-1 ----',n)

// }

// print(3)



// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n-1);
//     }
//   }

//   console.log(factorial(3));
// // 3*2*1



// function quickSort(arr) {
//     // Base case: arrays with fewer than two elements are already sorted
//     if (arr.length < 2) {
//         return arr;
//     }

//     // Choose a pivot
//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     // Partition the array into left and right
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     // Recursively sort the left and right arrays, and combine them with the pivot
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const array = [2, 3, 7, 6, 4, 5];
// const sortedArray = quickSort(array);
// console.log(sortedArray);


function insertTemp(arr, temp) {
    // Base condition
    if (arr.length === 0 || arr[arr.length - 1] <= temp) {
        arr.push(temp);
        return;
    }

    const val = arr.pop();

    // Hypothesis process
    insertTemp(arr, temp);

    // Induction process
    arr.push(val);
}

function sortArray(arr) {
    // Base condition
    if (arr.length === 1) return;

    const temp = arr.pop();

    // Hypothesis process
    sortArray(arr);

    // Induction process
    insertTemp(arr, temp);
}

function main(unsortedArray) {
    const arr = [...unsortedArray]; // Copy the input array to avoid modifying the original

    sortArray(arr);

    console.log("Sorted array:", arr.join(" "));
}

// Call the main function with an example array
main([2, 3, 7, 6, 4, 5]);

