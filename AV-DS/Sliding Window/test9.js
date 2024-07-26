// The Minimum Window Substring problem is a classic problem where you are given two strings, s and t, and you need to find the smallest substring in s that contains all the characters in t. This is typically solved using a sliding window technique.


const minWindowSubstring = (s, t) => {
    if (t.length > s.length) {
        return "Not possible";
    }

    const charCountT = new Map();
    for (const char of t) {
        charCountT.set(char, (charCountT.get(char) || 0) + 1);
    }
    // console.log('charCountT===', charCountT.size);

    let required = charCountT.size; //number of unique characters in t.
    let left = 0;
    let right = 0;
    let formed = 0; // tracks how many unique characters in t have been fully matched in the current window.
    const windowCounts = new Map(); // tracks the counts of characters in the current window.
    let minLength = Infinity; //  track the smallest window found.
    let minLeft = 0; //  track the left index of the smallest window found.
    let minRight = 0;//  track the right index of the smallest window found.

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (charCountT.has(char) && windowCounts.get(char) === charCountT.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
                minRight = right;
            }

            windowCounts.set(char, windowCounts.get(char) - 1);
            if (charCountT.has(char) && windowCounts.get(char) < charCountT.get(char)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLength === Infinity ? "No Window found!" : s.slice(minLeft, minRight + 1);
};

// Example usage:
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindowSubstring(s, t)); // Output: "BANC"
