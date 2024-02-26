/****************************************
 *
 *    Longest substr without repeating characters
 *          
 *
 * ***************************************/


// input: s = 'abcabcbb'
// output: 3
//Explanation: the answer is 3 with the length of 3;

const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            // If the current character is repeated and its index is greater than or equal to the start
            // Update the start to the next index after the last occurrence of the current character
            start = charIndexMap[currentChar] + 1;
        }

        // Update the index of the current character
        charIndexMap[currentChar] = end;

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// Example of usage
const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);
console.log(result); // Output: 3
