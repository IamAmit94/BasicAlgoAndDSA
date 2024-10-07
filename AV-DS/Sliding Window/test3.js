// FIXED WINDOW SIZE  count the occurance of anagram in string


const countAnagramOccurrences = (str1, str2) => {
    let i = 0, j = 0;
    let result = 0;
    let count = 0;

    const k = str2.length; // Length of the pattern

    let map = new Map();
    
    // Populate the map with the frequency of each character in str2
    for (let element of str2) {
        if (!map.has(element)) {
            map.set(element, 1);
            count++;
        } else {
            map.set(element, map.get(element) + 1);
        }
    }
    console.log(map)

    while (j < str1.length) {
        // Decrease the count of the current character in the map
        if (map.has(str1[j])) {
            map.set(str1[j], map.get(str1[j]) - 1);
            if (map.get(str1[j]) === 0) {
                count--;
            }
        }

        // If the window size is smaller than the size of the pattern, move the right end of the window
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            // When window size matches pattern size
            if (count === 0) {
                result++;
            }

            // Slide the window to the right
            if (map.has(str1[i])) {
                map.set(str1[i], map.get(str1[i]) + 1);
                if (map.get(str1[i]) === 1) {
                    count++;
                }
            }
            i++;
            j++;
        }
    }

    return result;
};

// Example usage:
const text = "aabaabaa";
const pattern = "aaba";

const result = countAnagramOccurrences(text, pattern);
console.log(result); // Output: 4 (anagrams: "aaba", "abaa", "baaa", "aaba")

