// [-5,-4,-3,-2,0,2,4,6,8]
// output [-4,4]

//Checking the sum Zero

const sumZero = (array) => {

    for(let element of array) {
        console.log(`outer loop===== `,array);
        for(let j = 1; j<array.length; j++) {
            console.log(`inner loop `,array[j]);
                if(element + array[j] === 0) {
                    return [element, array[j]];
                }
        }
    }
    return 'No pair found'
}


const result = sumZero( [-5,-4,-3,-2,0,2,4,6,8]);


console.log(`sumZeroPair=========>`,result);



// Time complexity for the above code is o(n^2)

// cal all sum zero pair
const sumOfPairZero = (array) => {
    let zeroPairArr = []
    for(let i = 0; i < array.length; i++) {
        for(let j=1; j<array.length;j++) {
            if(array[i] + array[j] === 0) {
                // return [array[i], array[j]];
                // console.log(`checking==>`,[array[i], array[j]])
                zeroPairArr.push([array[i], array[j]])
            }
        }
    }
    if(zeroPairArr.length) return zeroPairArr;

    return `No sum zero pair found !`
}


const result2  = sumOfPairZero([-5,-4,-3,-2,0,2,4,6,8]);

console.log(`result======`, result2);