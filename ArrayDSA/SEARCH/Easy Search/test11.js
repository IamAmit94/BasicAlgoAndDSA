//Find the first repeating element in an array of integers

/**
Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. 

Examples: 

Input: arr[] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 
Explanation: 5 is the first element that repeats


Input: arr[] = {6, 10, 5, 4, 9, 120, 4, 6, 10}
Output: 6 
Explanation: 6 is the first element that repeats
 */


const findFirstRepeatingElement = (arr) => {

    // create a set to keep the track of element

    let seen = new Set();

    for(let i = 0; i < arr.length; i++) {
// If the element is already in the Set, it's the first repeating element
        if(seen.has(arr[i])) {
            return arr[i];
        }
 // If it's not in the Set, add it to the Set
        seen.add(arr[i]);
        console.log('Seen SET====>',seen);
    }

    return -1;
}




  



//   Alternative APPROCH using object

//   const findFirstRepeatingElement = (arr) => {
//     // Create an object to store the occurrence count of elements
//     let elementCount = {};
  
//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {
//       // If the element is already in the object, it's the first repeating element
//       if (elementCount[arr[i]]) {
//         return arr[i];
//       }
      
//       // Otherwise, add the element to the object with a count of 1
//       elementCount[arr[i]] = 1;
//       console.log('ele----',elementCount)
//     }
  
//     // If no repeating element is found, return -1
//     return -1;
//   };
  
//   // Example usage:
//   console.log(findFirstRepeatingElement([1, 2, 3, 4, 5, 3, 6])); // Output: 3
//   console.log(findFirstRepeatingElement([10, 20, 30, 40])); // Output: -1 (no repeating elements)
  

// Alternative Approch using MAP

const findFirstRepeatingElement_1 = (arr) => {
    // Create a Map to store the elements as keys
    let elementMap = new Map();
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the element is already in the Map, it is the first repeating element
      if (elementMap.has(arr[i])) {
        return arr[i];
      }
      
      // Otherwise, add the element to the Map
      elementMap.set(arr[i], true);
      console.log('elem MAp====',elementMap)
    }
  
    // If no repeating element is found, return -1
    return -1;
  };

    // Example usage:
    console.log(findFirstRepeatingElement([1, 2, 3, 4, 5, 3, 6])); // Output: 3
    console.log(findFirstRepeatingElement([10, 20, 30, 40])); // Output: -1 (no repeating elements)