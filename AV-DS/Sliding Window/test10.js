// Minimum Window Substring
// MOST IMPORTANT AND CHALLENGING QUESTION OF SLIDING WINDOW

function smallestWindow(str1, str2) {
    let map = new Map();
    let size = str1.length;

    // Initialize frequency map with string `str2`
    // for (let i = 0; i < str2.length; i++) {
    //     map.set(str2[i], (map.get(str2[i]) || 0) + 1);
    // }

    for(let element in str2) {
        map.set(str2[element], (map.get(str2[element]) || 0) + 1);
    }


    let mapSize = map.size;
    let i = 0, j = 0;
    let resStart = 0, resLen = Infinity;

    while (j < size) {
        // Decrease frequency of current character
        if (map.has(str1[j])) {
            map.set(str1[j], map.get(str1[j]) - 1);
            if (map.get(str1[j]) === 0) {
                mapSize--;
            }
        }

        // Once all characters are matched
        if (mapSize === 0) {
            while (mapSize === 0) {
                // Update the result window
                if (resLen > (j - i + 1)) {
                    resLen = j - i + 1;
                    resStart = i;
                }

                // Try to contract the window from the left
                if (map.has(str1[i])) {
                    map.set(str1[i], map.get(str1[i]) + 1);
                    if (map.get(str1[i]) > 0) {
                        mapSize++;
                    }
                }
                i++;
            }
        }

        j++;
    }

    if (resLen === Infinity) {
        return "-1";
    }

    return str1.substring(resStart, resStart + resLen);
}

// Example usage:
let str1 = "this is a test string"; // "this is a tes`t stri`ng"
let str2 = "tist";
console.log(smallestWindow(str1, str2)); // Output: "t stri"

