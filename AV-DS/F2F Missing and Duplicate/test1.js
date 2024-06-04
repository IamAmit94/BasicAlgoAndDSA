function findDuplicatesAndMissing(arr) {
    const frequencyCounter = {};
    const duplicates = [];
    const missing = [];

    // Populate frequency counter and find duplicates
    for (let num of arr) {
        
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
   
        if (frequencyCounter[num] === 2) {
            duplicates.push(num); // Found a duplicate
        }
    }

    // Find missing elements
    const maxNum = arr.length;
    for (let i = 1; i <= maxNum; i++) {
        console.log('num===>',i)
        if (!(i in frequencyCounter)) {
            missing.push(i); // i is missing in the array
        }
    }

    return { duplicates, missing };
}

const array = [2, 3, 1, 8, 2, 3, 5, 1];
const result = findDuplicatesAndMissing(array);

console.log("Duplicates:", result.duplicates); // [2, 3, 1]
console.log("Missing:", result.missing); // [4, 6, 7]
