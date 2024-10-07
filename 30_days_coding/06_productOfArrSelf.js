// Problem statement can be resolve by 2 pass aproch
const productOfArrayExceptSelf = (arr)=> {

    let output = [];
    let leftProduct = 1;
    
    console.log('Given   input ------',arr)
    for(let i =0;i<arr.length;i++) {
        output[i] = leftProduct;
        leftProduct = leftProduct * arr[i]
    }
        console.log('LeftPrdt output ----',output)

    let rightProduct = 1;
    for(let i = arr.length - 1; i>=0; i--) {
        console.log('output[i]--',output[i], 'arr[i]----',arr[i])
        output[i] = output[i] * rightProduct
        rightProduct = rightProduct * arr[i]
    }

    console.log('final   output -----',output)
    return output
}




console.log(productOfArrayExceptSelf([1,2,3,4]))


// [ 1, 2, 3, 4 ]
// [ 1, 1, 2, 6 ]

// [ 24, 12, 8, 6 ]


// 6*1 =6     4
// 2*4=8      12
// 1*12=12    24
// 1*24=24    24