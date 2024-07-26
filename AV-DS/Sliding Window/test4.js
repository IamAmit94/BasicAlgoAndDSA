// Maximum of all subarrays of size k | Sliding Window
// we need to find the max number

const maxOfSubarraysOfSizeK = (arr, k) => {
    const list = [], finalAns = []
    let j = 0, i = 0
    while(j < arr.length) {
      
      //remove all the elements which are less the elm at j
      while(list.length > 0 && list[list.length - 1] < arr[j])
        list.pop()
        
      //push the curr max and elems after it...i.e. potential max elems
      list.push(arr[j])
      
      if(j - i + 1 < k)
        j++
      else if (j - i + 1 == k){
        
        //push the max to finalAns array (which is stored in front of list)
        finalAns.push(list[0])
        
        //check if max elm is getting lost when moving the window
        if(list[0] == arr[i])
          list.shift()
          
         j++
         i++
      }
    }
    return finalAns
  }


// Example usage:
const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const result = maxOfSubarraysOfSizeK(array, k);
console.log(result); // Output: [3, 3, 5, 5, 6, 7]







