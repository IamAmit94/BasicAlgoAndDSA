// Reverse string
// const reverseString = (str) => {
//     // Convert the string to an array of characters, reverse it, then join the characters back into a string
//     return str.split('').reverse().join('');
// }




// without inbuilt js function

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log("Original string: =>", originalString);
console.log("Reversed string: =>", reversedString);
