const checkSquare = (array1, array2) => {
    if(array1.length !== array2.length) {
        return false
    }

    let map1 = {}
    let map2 = {}

    for(let element of array1) {
        map1[element] = (map1[element] || 0) + 1
    }

    for(let element of array2) {
        map2[element] = (map2[element] || 0) + 1
    }

    console.log(map1, 'map1')
    console.log(map2, 'map2')
    
    for(let key in map1) {

        // if(!map2[key*key]) {
        //     console.log(key,'dd')
        //     return false
        // }

        if(map1[key] !== map2[key*key]) {
            console.log(key,'dd')
            return false
        }
}

return true;
}




const result = checkSquare([1, 2, 3, 4], [1, 9, 4, 16]);
// const result = checkSquare('listen', 'silent');

console.log(`result================>`, result);