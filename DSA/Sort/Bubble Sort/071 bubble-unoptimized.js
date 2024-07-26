// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i-1; j++){
      console.log(arr, arr[j] , arr[j+1]) //to check the current status of sort
      if(arr[j] > arr[j+1]){
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
    console.log(`One Pass Complete`)
  }
  return arr;
}

// ES2015 Version
// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }



let arr =  [37,45,29,8];  

console.log(bubbleSort(arr))