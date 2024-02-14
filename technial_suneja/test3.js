//String anagram ==> The string is anagram if the number of letter in the both string are same and the length of the string is also same
//'hello' == 'lhleo'
// 'amit ==> 'tami'


//condition
// length for the both string
// {h:1,e:1,l:3,o:1}


const checkAnagram = (string1, string2) => {
    if(string1.length !== string2.length) {
        return false;
    }

    let counter = {};
    for(let letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter])
    }
    console.log(`counter ==== `,counter);

    for(let item of string2) {
        console.log(item)
        if(!counter[item]){ // it will check if the element item is present in counter or not
            console.log(`Element that is not present in  string 1 `,item)
            return false;
        }
        counter[item]-=1;
    }
    return true;
}


const result = checkAnagram('hello', 'lleoh');
// const result = checkAnagram('listen', 'silent');

console.log(`result================>`,result);