// LEGACY VERSION (non ES2015 syntax)
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let lowest = i;
//         for(let j = i+1; j < arr.length; j++){
//           console.log(`I ${i} ---> ${arr[i]}  J ${j}====== ${arr[j]} lowest----->${arr[lowest]}`)
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         // console.log(`*************SWAP*******************`)
//        // console.log(arr)
//         if(i !== lowest){
//             //SWAP!
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//          // console.log(arr)
//         // console.log(`********************************`)
//     }
//     return arr;
// }

// ES2015 VERSION
function selectionSort(arr) {
  console.log(`Given Array ------`,arr)
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`I ${i} ---> ${arr[i]}  J ${j}====== ${arr[j]} lowest----->${arr[lowest]}`)
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // console.log(arr, arr[i], arr[i + 1]);
    console.log(`*************SWAP*******************`)
    console.log(`Before ----`,arr)
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    console.log(`After -----`,arr)
    console.log(`********************************`)
    
  }
  return arr;
}



let arr = [0,2,34,22,10,19,17]
console.log(selectionSort(arr))

