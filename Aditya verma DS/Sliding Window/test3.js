// Count Occurrences Of Anagrams | Sliding Window
const countAnagramOccurrences = (text, pattern) => {
    const patternMap = new Map();
    const textMap = new Map();
    let count = 0;

    // Initialize the frequency map for the pattern
    for (let char of pattern) {
        patternMap.set(char, (patternMap.get(char) || 0) + 1);
    }

    // Initialize the sliding window
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Update the frequency map for the current window in the text
        textMap.set(char, (textMap.get(char) || 0) + 1);

        // Shrink the window if it exceeds the pattern length
        if (i >= pattern.length - 1) {
            // Check if the current window is an anagram of the pattern
            if (compareMaps(patternMap, textMap)) {
                count++;
            }

            // Move the window by removing the leftmost character
            const leftChar = text[i - pattern.length + 1];
            textMap.set(leftChar, textMap.get(leftChar) - 1);
            if (textMap.get(leftChar) === 0) {
                textMap.delete(leftChar);
            }
        }
    }

    return count;
};

// Helper function to compare two frequency maps
const compareMaps = (map1, map2) => {
    if (map1.size !== map2.size) {
        return false;
    }

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
};

// Example usage:
const text = "cbaebabacd";
const pattern = "abc";

const result = countAnagramOccurrences(text, pattern);
console.log(result); // Output: 2 (anagrams: "cba", "bac")
