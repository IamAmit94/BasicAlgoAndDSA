https://leetcode.com/problems/binary-search/description/


var search = function(nums, target) {
    let size = nums.length
    let left = 0
    let right = size - 1

    while(right>=left) {
        let mid = Math.floor((left+right)/2)

        if(nums[mid] === target) {
            return mid
        }

        if(nums[mid] > target) {
            right = mid - 1
        } else if(nums[mid] <target) {
            
            left = mid + 1
        }
    }

    return -1
};