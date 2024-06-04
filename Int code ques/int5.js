// Number PLAINDROM


const isNumberPalindrome = (num) => {
    // Convert the number to a string
    const numStr = num.toString();
    
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = numStr.length - 1;

    // Compare digits from start and end, moving towards the middle
    while (start < end) {
        // If digits at start and end are not equal, it's not a palindrome
        if (numStr[start] !== numStr[end]) {
            return false;
        }
        // Move pointers towards the middle
        start++;
        end--;
    }

    // If the loop completes without finding any unequal digits, it's a palindrome
    return true;
}

// Example usage:
console.log(isNumberPalindrome(12321));  // true
console.log(isNumberPalindrome(12345));  // false
console.log(isNumberPalindrome(1221));   // true
