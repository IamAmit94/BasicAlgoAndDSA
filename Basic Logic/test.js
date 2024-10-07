// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let arr = [1,2,3,3,3,4,4,5,6,5,6]


/**************************************************************************************************************** /
                                              ⭐⭐⭐ BEST APPROCH ⭐⭐⭐  **** SET ***
/**************************************************************************************************************** */


// @@ Using a Set (Best for Simplicity and Efficiency)
// A Set automatically removes duplicates since it only stores unique values. This approach is very efficient and 
// straightforward: 

let uniqueArr = [...new Set(arr)];
console.log(`Using set ---`, uniqueArr); // Output: [1, 2, 3, 4, 5, 6]

//########## Time Complexity: O(n) where n is the length of the array.
//########## Space Complexity: O(n) for storing unique elements.

/**************************************************************************************************************** /
                                              ⭐⭐⭐ BEST APPROCH ⭐⭐⭐  **** MAP ***
/**************************************************************************************************************** */

// @@ Using a Map (Best for Counting Duplicates)
// If you want to not only find duplicates but also count their occurrences, using a Map is an excellent choice:

let map = new Map();
let duplicates = [];

arr.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
});

console.log('map==>', Array.from(map.keys()))

map.forEach((count, key) => {
    if (count > 1) {
        duplicates.push(key);
    }
});

console.log('Map Duplicate ', duplicates); // Output: [3, 4, 5, 6]

// function removeDuplicates(arr) {
// arr.forEach(item => { map.set(item, true) });
//         return Array.from(map.keys());
//     }

// console.log('removeDuplicate ==== ', removeDuplicates(arr))

//####### Time Complexity: O(n)
//####### Space Complexity: O(n)

/**************************************************************************************************************** /
                                              ⭐⭐⭐ BEST APPROCH ⭐⭐⭐ **** FREQUENCY COUNTER *****
/**************************************************************************************************************** */
// @@  Using Frequency Counter (Best for Custom Counting Needs)
// If you need more control over how duplicates are handled or counted:


let freq = {};
let duplicatesArray = [];

arr.forEach(item => {
    freq[item] = (freq[item] || 0) + 1;
});

for (let key in freq) {
    if (freq[key] > 1) {
        duplicatesArray.push(Number(key));
    }
}

console.log(duplicatesArray); // Output: [3, 4, 5, 6]


//##### Time Complexity: O(n)
//##### Space Complexity: O(n)

/**************************************************************************************************************** /
                                             💀💀 NOT RECOMMENDED 💀💀   **** FILTER INDEX OF ***
/**************************************************************************************************************** */


// @@ . Using `filter` and `indexOf` (Best for Learning Purposes)
// This approach is less efficient but educational as it uses basic array methods:

function removeDuplicates(arr) {
return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log('using filter and indexOf',removeDuplicates(arr));

//####### Time Complexity: O(n^2) (due to indexOf being called inside filter).
//####### Space Complexity: O(n).

/**************************************************************************************************************** /
                                             💀💀 NOT RECOMMENDED 💀💀   **** SORTING ***
/**************************************************************************************************************** */


// @@ Using Sorting (Best for Small Arrays)
// Sorting the array first and then finding duplicates in a single pass can be efficient for small arrays:


arr.sort((a, b) => a - b);

let dupArray = [];
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1] && !dupArray.includes(arr[i])) {
        dupArray.push(arr[i]);
    }
}

console.log(dupArray); // Output: [3, 4, 5, 6]

//###### Time Complexity: O(n log n) for sorting + O(n) for finding duplicates.
//###### Space Complexity: O(n).

