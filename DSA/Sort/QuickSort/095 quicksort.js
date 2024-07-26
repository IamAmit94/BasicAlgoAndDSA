
const pivot = (arr, start = 0, end = arr.length - 1) => {

  
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
    }
  }

  // Swap the pivot from the start the swapPoint
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]
  return swapIdx;
}


const quickSort = (arr, left = 0, right = arr.length -1) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1); // Decrement by 1 coz we do not want to include the pivot since it is in correct position
        //right
        quickSort(arr,pivotIndex+1,right); // Increment by 1 coz we do not want to include the pivot since it is in correct position
      }
     return arr;
} 
           
console.log(quickSort([100,7,2,4,6,9,1,2,5,3,23]))




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1




