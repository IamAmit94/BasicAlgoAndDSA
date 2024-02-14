// Largest sum of consecutive digits

// [1,2,3,4,3,5,4,6,7,8] ==> Total element - 10
// count largest sum of consecutive Digits
// num = 4
// sum = 25 output


// logic
// num > array.length ELSE ==> Error message
//( 10 - 4 + 1 = 7; )
// total number of element - number of consecutive number + 1 = total number of loop execution




const largestSumConsecutive = (array, num) => {
        if(num > array.length) {
            throw new Error("num is not greater than array")
        } else {
            let max = 0;
            for(let i=0;i<array.length-num+1;i++) {
                let temp = 0;
                for(let j=0;j<num;j++) {
                    // console.log(`i===========${i}`,`\nj===${j}`)
                    temp += array[i+j];
            }
            if(temp>max) {
                max = temp;
                }
        }
        return max;
}
}

const result = largestSumConsecutive([1,2,3,4,3,5,4,6,7,8],4);

console.log('result ====>', result);


// wap returning the consecutive number along with the sum
const largestSumConsecutive1 = (array, num) => {
    if (num > array.length) {
        throw new Error("num is not greater than array");
    } else {
        let maxSum = 0;
        let consecutiveNumbers = [];

        for (let i = 0; i < array.length - num + 1; i++) {
            let tempSum = 0;
            let tempConsecutiveNumbers = [];

            for (let j = 0; j < num; j++) {
                tempSum =tempSum + array[i + j];
                tempConsecutiveNumbers.push(array[i + j]);
            }

            if (tempSum > maxSum) {
                maxSum = tempSum;
                consecutiveNumbers = tempConsecutiveNumbers; 
            }
        }
        return { maxSum, consecutiveNumbers };
    }
}

const result1 = largestSumConsecutive1([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);

console.log('result ====>', result1);
