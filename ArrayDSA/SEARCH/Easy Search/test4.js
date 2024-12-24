// WAP Least frequent element in an array

/**
 * 
Given an array, find the least frequent element in it. If there are multiple elements that appear least number of times, print any one of them.

Examples : 


Input : arr[] = {1, 3, 2, 1, 2, 2, 3, 1}
Output : 3
Explanation: 3 appears minimum number of times in given array.


Input : arr[] = {10, 20, 30}
Output : 10 or 20 or 30
 */




const leastFrequencyElement = (arr) => {


    let frequencyMap = {};

    for(let element of arr) {
        if(frequencyMap[element]) {
            frequencyMap[element] += 1
        } else {
            frequencyMap[element] = 1
        }
    }

    console.log(frequencyMap)

    // find Element with the MIN frequency

    let minCount = Infinity; // Start with Infinity, so any frequency will be smaller
    let leastFrequentElement = null;

    for(let element in frequencyMap) {
        // If current frequency is less than the minCount, update the minCount and element
        if(frequencyMap[element] < minCount) {
            minCount = frequencyMap[element];
            leastFrequentElement = element
        }
    }
    return `Least frequent element in the array is ${leastFrequentElement} and its frequency is ${minCount}`;


}


console.log(leastFrequencyElement([1, 3, 2, 1, 2, 2, 3, 1]))