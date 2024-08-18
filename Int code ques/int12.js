// const thirdLargestElement = (arr) => {

//     if(arr.length<3) {
//         return `invalid array length`
//     }

//     //1st lagest
//     let first = arr[0]
//     for(let i = 0;i<arr.length;i++) {
//         if(arr[i]> first) {
//             first = arr[i]
//         }
//     }

//     let second = Number.MIN_VALUE
//     for(let i = 0;i<arr.length;i++) {
//         if(arr[i] > second && arr[i] < first) {
//             second = arr[i]
//         }
//     }

//     let third = Number.MIN_VALUE
//     for(let i = 0;i<arr.length;i++) {
//         if(arr[i] > third && arr[i] < first && arr[i] < second) {
//             third = arr[i]
//         }
//     }

//     return third;
// }

const thirdLargestElement = (arr) => {
    if(arr.length < 3) {
        return `invalid array length`
    }

    let first = arr[0];
    let second = -Infinity
    let third = -Infinity

    for(let i = 0;i<arr.length; i++) {

        if(arr[i]>first) {
            third = second
            second = first;
            first = arr[i]
        } else if(arr[i] > second) {
            third = second;
            second = arr[i]
        } else if (arr[i]>first) {
            third = arr[i]
        }
    }

    return{first, second, third}
}

const result = thirdLargestElement([12, 13, 1,  10, 34, 16])
console.log(result)