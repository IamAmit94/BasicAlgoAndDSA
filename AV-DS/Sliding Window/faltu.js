const longestSubstringKUnique = (str, k) => {

  if(k<=0 || str.length === 0) {
    return ``
  }

  let i = 0, j = 0;
  let size = str.length;
  let result = 0;
  let map = new Map();

  while(j < size) {

    map.set(str[j], (map.get(str[j]) || 0) + 1)

    if(map.size < k) {
      j++
    } else if(map.size === k) {
      result = Math.max(result, j - i + 1)
      j++;

    } else if(map.size > k) {
        while(map.size > k) {
          map.set(str[i], map.get(str[i]) -1)

          if(map.get(str[i]) === 0) {
            map.delete(str[i])
          } 
          i++
        }
        j++
    }
  }
  return result;
  
}



const inputString = "aabacbebebe";
const k = 3;

const result = longestSubstringKUnique(inputString, k);
console.log(result);