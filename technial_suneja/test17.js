/****************************************
 *
 *          Maximum Occurance of character in givenString
 *          
 *
 * ***************************************/


const getCharOfString = (str) => {


    const map = {};
    str.split('').forEach(element => {
        // console.log(element)
        map[element] = map[element] ? map[element]+1 : 1; 
        // console.log(map[element])
    });
    // console.log(map)

    let max = 1;
    char = str[0];
    for(let k in map) {
        // console.log(map[k])

        if(map[k] > max) {
            max=map[k];
            char = k;
        }
    }
    return char;
}


const result = getCharOfString('Hello Worrrrld')
console.log(`result ==== > ${result}`);