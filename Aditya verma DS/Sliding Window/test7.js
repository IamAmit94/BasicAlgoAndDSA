// Longest Substring With K Unique Characters | Variable Size Sliding Window

const longestSubstringKUnique = (s, k) => {
    if (k <= 0 || s.length === 0) {
        return '';
    }

    let start = 0;
    let maxLen = 0;
    let charFrequency = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);

        while (charFrequency.size > k) {
            const startChar = s[start];
            charFrequency.set(startChar, charFrequency.get(startChar) - 1);

            if (charFrequency.get(startChar) === 0) {
                charFrequency.delete(startChar);
            }

            start++;
        }

        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1;
        }
    }

    return s.slice(start, start + maxLen);
};

// Example usage:
const inputString = "eceba";
const k = 2;

const result = longestSubstringKUnique(inputString, k);
console.log(result); // Output: "ece"
