// Problem Statement: John is at a toy store help him pick maximum number of toys. He can only select in a continuous manner and he can select only two types of toys.


// Pick Toys | An Interesting Sliding Window Problem
const pickToyFromWind = (str, k) => {

    let i = 0, j = 0 ;
    let result = 0;
    let size = str.length;

    let map = new Map()

    while(j<size) {

        map.set(str[j], (map.get(str[j]) || 0) + 1)
        

        if(map.size<k) {
            j++;
        } else if(map.size === k) {
            result = Math.max(result, j - i + 1)
            j++
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
    return result
}
// abac  a: 2 b: 1 c: 1


// Example usage:
const s = "abaccab";
const k = 2;
console.log(pickToyFromWind(s, k)); // Output: "BANC"
