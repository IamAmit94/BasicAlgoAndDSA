const maximumSubarraySum = (nums, k) => {
    let i = 0;
    let j = 0;
    let sum = 0;
    let maxSum = 0;
    let freq = {};
  
    while (j < nums.length) {
      sum = sum + nums[j];
      freq[nums[j]] = (freq[nums[j]] || 0) + 1;
      if (j - i + 1 < k) {
        j++;
      } else if (j - i + 1 === k) {
        // Check if the subarray has distinct elements
      //   console.log("first ===", Object.keys(freq).length);
      console.log('first====',freq)
        if (Object.keys(freq).length === k) {
          if (sum > maxSum) {
            maxSum = sum;
          }
        }
        // Slide the window by removing the element at the start of the window
        sum = sum - nums[i];
  
        freq[nums[i]]--;
        if (freq[nums[i]] === 0) {
          delete freq[nums[i]];
        }
        i++;
        j++;
      }
      console.log(freq);
    }
    console.log(freq);
    return maxSum;
  };
  
  console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
  
  //   [1, 5, 4, 2, 9, 9, 9]
  // - [1,5,4] which meets the requirements and has a sum of 10.
  // - [5,4,2] which meets the requirements and has a sum of 11.
  // - [4,2,9] which meets the requirements and has a sum of 15.
  // - [2,9,9] which does not meet the requirements because the element 9 is repeated.
  // - [9,9,9] which does not meet the requirements because the element 9 is repeated.
  