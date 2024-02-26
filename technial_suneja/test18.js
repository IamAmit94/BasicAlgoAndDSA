/****************************************
 *
 *    check if the given string is palindrom or not
 *          
 *
 * ***************************************/

//mom -> mom || true
//dad -> dad || true
// like -> ekil || false


// case 1 : inbuild js function

const isPalindromStrInbuilt = (str) => {

    let reverse = str.split('').reverse( ).join('');

    return str.toLowerCase() === reverse.toLowerCase()
}


const result = isPalindromStrInbuilt('mom');
// console.log('ibuilt funx ====> ',result); // should return true



// case 2 :

const isPlainString = (string) => {
    let newStr = string.toLowerCase();

    let left = 0;
    let right = newStr.length - 1;

    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false;

            left++;
            right--;
    }
    return true;
}
}
const palindromResult = isPlainString('dad')
console.log(`isPlainString ===> ${palindromResult}`);