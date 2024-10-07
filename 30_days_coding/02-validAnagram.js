// is the anagram valid or not


const isValidAnagram = (str1, str2) => {

    if(str1.length !== str2.length) {
        return `Invalid anagram with unmatch string length`
    }
    
    let map = new Map()


    for(let element of str1) {
        if(!map.has(element)) {
            map.set(element, 1)
        } else {
            map.set(element, map.get(element) + 1)
        }
    }

    for(let item of str2) {
        console.log('first', item)
        if(!map.has(item)) {

            return false
        } 
        map.set(item, map.get(item) - 1);
        if (map.get(item) === 0) {
            map.delete(item);
        }
    }

    return map.size === 0;
}

// const isValidAnagram = (str1, str2) => {

//     if(str1.length !== str2.length)  {
//         return `Not Anagram`
//     }

//     let sorted1 = str1.split('').sort().join('')
//     let sorted2 = str2.split('').sort().join('')

//     return sorted1 === sorted2
// }

const str1 = 'anagram'
const str2 = 'nagaram'
console.log(isValidAnagram(str1, str2))