const isPalindrome = (arr) => {
    return arr.map((str) => {
        if (str.length <= 1) {
            console.log('Empty data so Palindrome');
            return true;
        }

        // Normalize the string: remove non-alphanumeric characters and convert to lowercase
        const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let start = 0;
        let end = normalizedStr.length - 1;

        while (start < end) {
            if (normalizedStr[start] !== normalizedStr[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    });
}

console.log(isPalindrome(["racecar", "hello", "A man, a plan, a canal, Panama"])); // [true, false, true]
console.log(isPalindrome(["racecar", "madam", "A man, a glan, a canal, Panama"])); // [true, true, false]
