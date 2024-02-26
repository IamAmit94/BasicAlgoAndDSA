

/**Basic binary search code
 * 
 * 
 */
// normal Binary search logic
// let start = 0
//   let end = arr.length -1;
  
//   while(start<=end) {
//     //    let mid = start + (end-start/2)
//        let mid = Math.floor((start+end)/2)
  
//   if(ele === arr[mid]) {
//   return arr[mid]
// } else if (ele < arr[mid]) {
//     end  = mid-1
// } else  {
//     start = mid +1
// }
//    }

// for the 1st occurance of the array
// let start = 0
//   let end = arr.length -1;
//   let res = -1 // assume to be not found
//   while(start<=end) {
//        let mid = Math.floor((start+end)/2)
  
//   if(ele === arr[mid]) {
//   res = arr[mid];
//   end = mid -1
// } else if (ele < arr[mid]) {
//     end  = mid-1
// } else  {
//     start = mid +1
// }
//    }
//    return res;

// For the last occurance of the array
// let start = 0
//   let end = arr.length -1;
//   let res = -1 // assume to be not found
//   while(start<=end) {
//        let mid = Math.floor((start+end)/2)
  
//   if(ele === arr[mid]) {
//   res = arr[mid];
//   start = mid + 1
// } else if (ele < arr[mid]) {
//     end  = mid-1
// } else  {
//     start = mid +1
// }
//    }
//    return res;


const firstOccurrenceBs = (arr, element) => {
  
  let left = 0;
  let right = arr.length - 1;
  let result = -1
  while(left <= right) {

      let mid =  Math.floor((left + right)/2);

      if(arr[mid] === element) {
          result = mid
          right = mid - 1; // Move left to find the first occurrence
      } else if (arr[mid] > element) {
          right = mid - 1;
      } else {
          left = mid + 1
      }
  }
      return `${element} is present at 1st occurrence on index ${result}`;

}



let sortedArray = [2,4,10,10,10,18,20];
let targetElement = 10;


const result = firstOccurrenceBs(sortedArray, targetElement);
console.log(`result ==== `, result);