
// Permutation of string using backtracking


// OLD SCHOOL METHODS
// const permutaionString = (str) => {
//     let result = [];

//     // Helper function to swap characters in the string
//     const swap = (arr, i, j) => {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     };

//     const solve = (arr, index, result) => {
//         let size = arr.length;
//         // Base condition: if the index reaches the end of the array, add the permutation to the result
//         if (index === size) {
//             result.push(arr.join(''));
//             return;
//         }

//         let mp = new Set(); // Create a set to avoid duplicate swaps

//         for (let i = index; i < size; i++) {
//             if (!mp.has(arr[i])) { // Only proceed if the character has not been used before at this level
//                 mp.add(arr[i]);

//                 // Swap the current index with the i-th index
//                 swap(arr, index, i);
//                 // Recurse with the next index
//                 solve(arr, index + 1, result);

//                 // Backtrack: swap the elements back to their original position
//                 swap(arr, index, i);            }
//         }
//     };

//     // Convert the string to an array of characters for easy swapping
//     let arr = str.split('');
//     solve(arr, 0, result);

//     return result;
// };



// using the latest ES6 inbuilt swap method
const permutaionStringBacktrack = (str) => {
    let result = [];

    // Helper function
    const solve = (arr, index, result) => {
        let size = arr.length;
        // Base condition: if the index reaches the end of the array, add the permutation to the result
        if (index === size) {
            result.push(arr.join(''));
            return;
        }

        let mp = new Set(); // Create a set to avoid duplicate swaps

        for (let i = index; i < size; i++) {
            if (!mp.has(arr[i])) { // Only proceed if the character has not been used before at this level
                mp.add(arr[i]);
                
                // Swap the current index with the i-th index
                [arr[index], arr[i]] = [arr[i], arr[index]];
                // console.log('arrr---',arr)
                // Recurse with the next index
                solve(arr, index + 1, result);

                // Backtrack: swap the elements back to their original position
                [arr[index], arr[i]] = [arr[i], arr[index]];
            }
        }
        console.log('map-----',mp)
    };

    // Convert the string to an array of characters for easy swapping
    let arr = str.split('');
    solve(arr, 0, result);

    return result;
};





// Example usage
const inputStr = "abc";
const permutations = permutaionStringBacktrack(inputStr);
console.log(permutations);
