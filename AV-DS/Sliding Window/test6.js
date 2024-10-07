// WAP to find the largestSubArraySumK `-ve in array`

const largestSubarraySumK = (arr, k) => {
    let prefixSum = 0;
    let maxLength = 0;
    let j = 0;
    const prefixMap = new Map();
    console.log('Arr == ',arr)
  
    while (j < arr.length) {
      prefixSum = prefixSum + arr[j];
      console.log(`${prefixSum} + ${arr[j]}  ==> `,prefixSum)
    
      // If the sum equals k, we have a subarray from the start of the array
      if (prefixSum === k) {
        maxLength = j + 1;

      }

  
      // If (prefixSum - k) exists in the map, we found a subarray summing to k
      if (prefixMap.has(prefixSum - k)) {
        maxLength = Math.max(maxLength, j - prefixMap.get(prefixSum - k));
      }
  
      // Store the prefix sum in the map if it's not already there
      if (!prefixMap.has(prefixSum)) {
        prefixMap.set(prefixSum, j);
      }
  
      // Move to the next element
      j++;
    }
    console.log('prefixMap ==== ',prefixMap)  
    return maxLength;
  };
  
  // Example usage:
  const array = [1, -1, 5, -2, 3];
  const k = 3;
  
  const result = largestSubarraySumK(array, k);
  console.log(result); // Output: 4 (subarray: [1, -1, 5, -2])
  