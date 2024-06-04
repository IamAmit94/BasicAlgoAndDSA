// 2 string anagram


const areAnagrams = (str1, str2) => {
    // Remove non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Check if the lengths are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const charMap1 = {};
    const charMap2 = {};

    // Populate character frequency map for str1
    for (let char of str1) {
        charMap1[char] = (charMap1[char] || 0) + 1;
    }

    // Populate character frequency map for str2
    for (let char of str2) {
        charMap2[char] = (charMap2[char] || 0) + 1;
    }

    // Check if character frequency maps are equal
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent"));     // true
console.log(areAnagrams("hello", "world"));       // false
console.log(areAnagrams("rail safety", "fairy tales")); // true
