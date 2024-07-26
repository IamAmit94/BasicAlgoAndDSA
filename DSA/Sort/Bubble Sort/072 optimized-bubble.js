// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      console.log(arr, arr[j] , arr[j+1])// to check the current status of sort
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}


let arr = [8,1,2,3];
// let arr = [8,1,2,3,4,5,6,7]

console.log(bubbleSort(arr)) ;


// In the above optimized version when the swap is done and there
// is no need to swap further as element are in sorted position, so 
// we will not be sorting the element anymore