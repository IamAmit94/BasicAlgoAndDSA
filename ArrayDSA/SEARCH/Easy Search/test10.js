// Find the Number Occurring Odd Number of Times


/**
Given an array of positive integers. All numbers occur an even number of times except one number which occurs an odd number of times. Find the number in O(n) time & constant space.

Examples : 

Input : arr = {1, 2, 3, 2, 3, 1, 3}
Output : 3


Input : arr = {5, 7, 2, 7, 5, 2, 5}
Output : 5

 */



const getOddOccurrence = (arr) => {
  // creating a hash map for it

  let hmap = new Map();

  // INserting all element in the Hash Map
  for (let i = 0; i < arr.length; i++) {
    if (hmap.has(arr[i])) {
     // If the array element is already present increse the count
      let val = hmap.get(arr[i]);
      hmap.set(arr[i], val + 1);
    } else {
        // if array element is not present then put the element to hashMap and increase
        // the count to one
      hmap.set(arr[i], 1);
    }
  }

  console.log("hmap ----", hmap);

  // check for the ODD occurrence of each element present in hash Map

  for (let [key, value] of hmap) {
    if (value % 2 !== 0) {
      return key; // Return the element with odd occurrence
    }
  }
  return -1;
};


console.log(getOddOccurrence([2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2]));

