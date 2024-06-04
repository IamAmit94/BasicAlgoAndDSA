
// const isAnagram = (str1, str2) => {
    
//     if (str1.length !== str2.length) {
//         return false
//     }
    
//     // create frequency counters for both strings
//     const freqCounter1 = {};
//     const freqCounter2 = {};

//     // fill frequency counters for string1
//     for (let char of str1) {
//         freqCounter1[char] = (freqCounter1[char] || 0) + 1;
//     }
//     // fill frequency counters for string2
//     for(let char of str2) {
//         freqCounter2[char] = (freqCounter2[char] || 0) + 1;
//     }

//     // compare frequency counters
//     for(let key in freqCounter1) {
//         if(freqCounter1[key] !== freqCounter2[key]) {
//             return false
//     }
// }
// return true;
// }

// Alternative solution

const isAnagram = (str1,str2) => {

    if(str1.length !== str2.length) {
        return false
    }
    // create a frequency counter for one of the strings
    let counter = {};

    // populate frequency counter
    for(let letter of str1) {
        console.log(letter)
        counter[letter] = (counter[letter] || 0) + 1;
    }

    console.log(`counter===== `,counter);

    // iterate over second string and compare the char
    for(let char of str2) {
        if(!counter[char]) {
            console.log(`Char that is not present in str2 is ${char}`)
            return false
        }
    }
    return true
}



// const result = isAnagram('heart', 'traeh');
const result = isAnagram("listen", "silent")

console.log(result)