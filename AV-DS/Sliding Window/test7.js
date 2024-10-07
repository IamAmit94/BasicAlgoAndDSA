// Longest Substring With K Unique Characters | Variable Size Sliding Window

const longestSubstringKUnique = (str, k) => {
    if (k <= 0 || str.length === 0) {
      return "";
    }
  
    let i = 0, j = 0;
    let size = str.length;
    let tempResult = 0;
    let map = new Map();
  
    while (j < size) {
      // Add the character at position j to the map or update its count
      map.set(str[j], (map.get(str[j]) || 0) + 1);

      // NOTE: When you first encounter a character (i.e., the character str[j] is not yet in the Map), 
     //         map.get(str[j]) will return `undefined`.
  
      // Check if the number of unique characters is less than k
      if (map.size < k) {
        j++;
      } 
      // Check if the number of unique characters equals k
      else if (map.size === k) {
        tempResult = Math.max(tempResult, j - i + 1);
        j++;
      } 
      // If the number of unique characters exceeds k
      else if (map.size > k) {
        while (map.size > k) {
          // Reduce the count of the character at position i
          map.set(str[i], map.get(str[i]) - 1);
          // Remove the character if its count is zero
          if (map.get(str[i]) === 0) {
            map.delete(str[i]);
          }
          i++;
        }
        j++;
      }
    }
    return tempResult;
  }

// Example usage:
// const inputString = "qsjufvbadfivujb";
// const k = 5;

const inputString = "aabacbebebe";
const k = 3;

const result = longestSubstringKUnique(inputString, k);
console.log(result); // Output: aabacb, cbe, cbebebe



//cond ==> number of unique char in sliding wind
// NOTE: Whenever you need to calculate the unique character you need to use the MAP for it
