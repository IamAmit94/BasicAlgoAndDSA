// Insertion Sort

// Using for loop
// const insertionSort = (arr) => {
//     console.log('Provided Arr -----',arr);
//     let currentVal;
//     for(let i = 1; i < arr.length; i++) {
        
//         currentVal = arr[i];
//         let j;
//         for(j = i-1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }

//     return arr;
// }



const insertionSort  = (arr) => {
    console.log('Provided Arr ===== >', arr);

    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key
    }
    return arr;
}
console.log(insertionSort([5,3,4,1,2]))