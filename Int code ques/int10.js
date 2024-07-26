// Remove duplicate from the string

// const removeDuplicates = (str) => {
//     let uniqueStr = '';
//     const charSet = new Set();

//     for (let char of str) {
//         if (!charSet.has(char)) {
//             uniqueStr += char;
//             charSet.add(char);
//         }
//     }

//     return uniqueStr;
// }

// Alternative method

const removeDuplicates = (str) => {
    let uniqueStr = '';
    const charCount = {};

    for (let char of str) {
        // If the character is not in charCount, add it to uniqueStr and set its count to 1
        if (!charCount[char]) {
            uniqueStr += char;
            charCount[char] = 1;
        }
    }
    // console.log(charCount)
    return uniqueStr;
}

// Example usage:
const originalString = "hello world";
const stringWithoutDuplicates = removeDuplicates(originalString);
console.log("Original string:", originalString);
console.log("String without duplicates:", stringWithoutDuplicates);
