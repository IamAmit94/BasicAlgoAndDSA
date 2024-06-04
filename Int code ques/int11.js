// WAP to flat the array without using the inbuilt function

const flattenArray = (arr) => {
    let flattenedArray = [];

    arr.forEach(item => {
        if(Array.isArray(item)) {
            flattenedArray = flattenedArray.concat(flattenArray(item))
        } else {
            
            flattenedArray.push(item);
            console.log('first===>',flattenedArray)
        }
    });

    return flattenedArray;
}




const nestedArray = [1, [2, [3, 4], 5], 6,];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);