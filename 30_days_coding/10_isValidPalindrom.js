const isValidPalindrom = (s) => {

    let updatedStr = s.toLowerCase().replace(/[^a-z0-9]/g,'')
    return  updatedStr === updatedStr.split('').reverse().join('')
    // console.log('upda===',updatedStr)
    
    // let left = 0;
    // let right = updatedStr.length - 1;

    // while(right>left) {
    //     if(updatedStr[left] !== updatedStr[right]) {
    //         return false
    //     }
    //     left++;
    //     right--;
    // }

    // return true
};



console.log(isValidPalindrom("A man, a plan, a canal: Panama"))
console.log(isValidPalindrom("race a car"))
console.log(isValidPalindrom(""))