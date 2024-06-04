// REVERSE WORD

// const reverseWords = (str) =>  {
//     // Split the string into an array of words
//     const words = str.split(' ');
    
//     // Reverse the order of words
//     const reversedWords = words.reverse();
    
//     // Join the array of words back into a string
//     const reversedString = reversedWords.join(' ');
    
//     return reversedString;
// }


// without using the inbuild js function

const reverseWords = (str) => {
    let reversedString = '';
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            // Add the word to the beginning of the reversed string
            reversedString = word + ' ' + reversedString;
            // Reset the word variable
            word = '';
        } else {
            // Build the word character by character
            word += str[i];
        }
    }
    // Add the last word to the beginning of the reversed string
    reversedString = word + ' ' + reversedString;
    // Remove the trailing space
    reversedString = reversedString.trim();
    return reversedString;
}




// Example usage:
const originalString = "Hello world! This is a test.";
const reversedString = reverseWords(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
