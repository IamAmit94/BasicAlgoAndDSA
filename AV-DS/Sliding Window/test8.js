function longestSubstringWithKUniqueChars(s, k) {
    if (s.length === 0 || k === 0) {
        return "";
    }

    let start = 0;
    let maxLength = 0;
    let maxSubstring = "";
    let charCount = new Map();

    for (let end = 0; end < s.length; end++) {
        let endChar = s[end];
        charCount.set(endChar, (charCount.get(endChar) || 0) + 1);

        // Shrink the window until we have exactly k unique characters
        while (charCount.size > k) {
            let startChar = s[start];
            charCount.set(startChar, charCount.get(startChar) - 1);
            if (charCount.get(startChar) === 0) {
                charCount.delete(startChar);
            }
            start++;
        }

        // Check if the current window length is greater than the max length found so far
        if (charCount.size === k) {
            let currentLength = end - start + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxSubstring = s.substring(start, end + 1);
            }
        }
    }

    return maxSubstring;
}

// Example usage:
const str = "abababafsdjvls";
const k = 2;
console.log(longestSubstringWithKUniqueChars(str, k)); // Output: "araa"
