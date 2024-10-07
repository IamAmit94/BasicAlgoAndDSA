
// Using Map to find the duplicate in the array




/****************************
 * 
 *   @ using MAP
 * 
 ***************************/
const containDuplicate = (nums) => {
    if (!nums.length) return `Empty Array`;

    let map = new Map();

    for (let element of nums) {
        if (map.has(element)) {
            return true;  // Duplicate found
        } 
        map.set(element, true);  // Store the element in the map
    }

    return false;  // No duplicates found
}


/****************************
 * 
 *   @ using SET
 * 
 ***************************/


const containDuplicate1 = (nums) => {

    if(!nums.length) return `Empty array`

    let set = new Set()

    for(let element of nums) {
        if(set.has(element)) {
            return true;
        } else {
            set.add(element)
        }
    }

    return false
}

let myArr = [1, 2, 3, 4, 1];
console.log(containDuplicate(myArr));  // Output: false
