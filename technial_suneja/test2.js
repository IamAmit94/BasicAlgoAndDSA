// find 1st pair of sum 0
// [-5,-4,-3,-2,0,2,4,6,8]



const findZeroSumPair = (array) => {
    let left = 0;
    let right = array.length - 1;
    // console.log(`left ===`,left);
    // console.log(`right ===`,right);

    while(left < right) {
        let sum = array[left] + array[right];

        if(sum === 0) {
            return [array[left], array[right]];
        } else if(sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
    
}


const result = findZeroSumPair([-5,-4,-3,-2,0,2,4,6,8]);

console.log('result ======> ',result);


//Time complexity for this code is o(n) linear


// wap to collect all the non zero pair 
const findZeroSumPair1 = (array) => {
    let left = 0;
    let right = array.length - 1;
    let sumZeroArr = [];

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === 0) {
            sumZeroArr.push([array[left], array[right]]);
            left++;  // Add this line to move towards the center
            right--; // Add this line to move towards the center
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }

    return sumZeroArr;
}

const result1 = findZeroSumPair1([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log('result ======> ', result1);
