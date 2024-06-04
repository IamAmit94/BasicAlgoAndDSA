// String palindrom

const isPalindrome = (str) => {
    // Convert the string to lowercase to handle case-insensitivity
    str = str.toLowerCase();
    
    // Remove non-alphanumeric characters using regular expression
    str = str.replace(/[^a-z0-9]/g, '');

    // Check if the string is empty or has only one character
    if (str.length <= 1) {
        return true;
    }

    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;

    // Compare characters from start and end, moving towards the middle
    while (start < end) {
        // If characters at start and end are not equal, it's not a palindrome
        if (str[start] !== str[end]) {
            return false;
        }
        // Move pointers towards the middle
        start++;
        end--;
    }

    // If the loop completes without finding any unequal characters, it's a palindrome
    return true;
}

// Example usage:
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
