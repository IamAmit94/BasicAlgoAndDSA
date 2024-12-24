// Single Element Among Doubles

// Given an array of integers. All numbers occur twice except one number which occurs once. Find the number in O(n) time & constant extra space.

// Example : 

// Input:  arr[] = {2, 3, 5, 4, 5, 3, 4}
// Output: 2 


// Input:  arr[] = {2, 5, 2}
// Output: 5


// Input:  arr[] = {3}
// Output: 3



const singleElementAmongDouble  = (arr) => {


    let frequencyMap = {};

    for(let element of arr) {
        if(frequencyMap[element]) {
            frequencyMap[element] += 1
        } else {
            frequencyMap[element] = 1;
        }
    
    }


    console.log(frequencyMap)

    // find the element who is appearing single time only

    let minCount = 0;
    let leastFrequentSingleElement = null;
    

    for(let element in frequencyMap) {

        if(frequencyMap[element] === 1) {
            minCount = frequencyMap[element];
            leastFrequentSingleElement = element
        }
    }

    return `Least frequent element in the array is: ${leastFrequentSingleElement} and its frequency is: ${minCount}`;
}



console.log(singleElementAmongDouble([2, 3, 5, 4, 5, 3, 4]))