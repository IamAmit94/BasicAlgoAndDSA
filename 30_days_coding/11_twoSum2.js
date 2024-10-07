//
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let sum = 0;

  while (right > left) {
    sum = nums[left] + nums[right];
    // console.log("first--", sum);
    if (sum === target) {
      return [left + 1, right + 1];
    } 
    else if (sum < target) {
        left++;
    } 
    else  {
     right--;
    }
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15]), 9);
//  console.log(twoSum([[2,3,4]]),6)
//  console.log(twoSum([-1,0]),-1)
