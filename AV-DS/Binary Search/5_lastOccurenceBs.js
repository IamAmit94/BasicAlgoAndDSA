const lastOccurrenceBs = (arr, element) => {
  
    let left = 0;
    let right = arr.length - 1;
    let result = -1
    while(left <= right) {
  
        let mid =  Math.floor((left + right)/2);
  
        if(arr[mid] === element) {
            result = mid
            console.log(`-------------`,result);
            left = mid + 1; // Move right to find the first occurrence
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
  
  
  const result = lastOccurrenceBs(sortedArray, targetElement);
  console.log(`result ==== `, result);