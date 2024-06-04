// count the unique elements in an array

// fetch the unique element from the array
// your 1st element will always be unique so push that element
// now we will be comparing the i to it's previous value
// if i !== i-1 then we will push it


const countUniqueElement = (arr) => {
    let uniqElemnt = [];

    if(arr.length !== 0) {
        uniqElemnt.push(arr[0]);// 1st element will always be unique

        for(let i = 1; i < arr.length; i++) {
            if(arr[i] !== arr[i-1]) {
                uniqElemnt.push(arr[i]);
            }
            
        }
        console.log(uniqElemnt);
        return uniqElemnt.length;
    } else {
        return `Empty Array`;
    }
}


// Alternative soln

// logic
// i = 0; j = 1;
// if i & j value same then j ++
// array[i] != array[j]
// 1. i++
// 2. array[i] =array[j]; //swap

// const countUniqueElement = (arr) => {
//     if(arr.length !== 0) {
//         let i = 0;
//         for(let j = 1; j< arr.length; j++) {
//             if(arr[i] !== arr[j]) {
//                 i++;
//                 arr[i] = arr[j];
//         }
//     }
//         return i + 1;
//     } else  {
//         return `Empty Array`;
//     }
// }

console.log(countUniqueElement([1, 1, 2, 3, 3, 4, 5, 5, 5])) // countUniqueElement([1, 1, 2, 3, 3, 4, 5, 5, 5])
console.log(countUniqueElement([])); // 0
