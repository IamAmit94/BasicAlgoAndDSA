// WAP to find the longest substring with k unique character

const longSubstrNoRepChar = (str) => {

    let size = str.length;

    if(size === 0) {
        return `Empty data`
    }

    let i = 0, j = 0;
    let result = 0;
    let map = new Map()

    while(j<size) {

        map.set(str[j], (map.get(str[j]) || 0) + 1)

        // if(map.size < j - i + 1) {
        //     j++
        // } else
         if(map.size === j - i + 1){
            result = Math.max(result, j-i+1)
            j++;
        } else if(map.size < j-i+1) {
            while(map.size < j-i+1) {
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

 const inputString = "pwwkew";
 
 const result = longSubstrNoRepChar(inputString);
 console.log(result);

