// WAP Most frequent element in an array

/**
Given an array, find the most frequent element in it. If there are multiple elements that appear a maximum number of times, print any one of them.

Examples: 

Input : arr[] = {1, 3, 2, 1, 4, 1}
Output : 1
Explanation: 1 appears three times in array which is maximum frequency.


Input : arr[] = {10, 20, 10, 20, 30, 20, 20}
Output : 20 appears four  times in array which is maximum frequency

 */




const mostFrequentElemAproch_1 = (arr) => {

    arr.sort();
    console.log(arr)
    //  10, 10, 20, 20, 20, 20, 30
    // find max frequency using linear search traversal

    let max_count = 1, res = arr[0];
    let curr_count = 1;

    for(let i = 1; i< arr.length; i++) {
        if(arr[i] === arr[i-1]) {
            curr_count++;
        } else {
            curr_count = 1;
        }

        if(curr_count > max_count) {
            max_count = curr_count;
            res = arr[i-1]
        }
    }

    return res;
    
}



// console.log(mostFrequentElemAproch_1([10, 20, 10, 20, 30, 20, 20]))

// BEST APROCH FOR FREQUENCY COUNTER

const mostFrequentElement = (arr) => {

    let frequencyMap = {};

    // Iterate over the array and count frequencies of each element

    for(let element of arr) {
        
        if(frequencyMap[element]) {
            frequencyMap[element] += 1
        } else {
            frequencyMap[element] = 1
        }
    }

    // console.log('frw====',frequencyMap)

    // find the element with the highest frequency

    let maxCount = 0;
    let mostFrequentELement = null;

    for(let element in frequencyMap) {

        if(frequencyMap[element] > maxCount) {
            maxCount = frequencyMap[element];
            mostFrequentELement = element
        }
    }

    return `Most frequent element in array is ${mostFrequentELement} as it appear ${frequencyMap[mostFrequentELement]}`
}


console.log(mostFrequentElement([10, 20, 10, 20, 30, 20, 20]))