// Bubble Sort

// UnOptimised Bubble sort

const unoptBubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {  // For whole Iteration
    for (let j = 0; j < i - 1; j++) { // for I whole Iteration to j's iteration
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};


// console.log(unoptBubbleSort([8,1,7,2,5,6,9,4,3]));


const optBubbleSort = (arr) => {

    let noSwap;
    for(let i = arr.length; i > 0; i--) {
        noSwap = true;
        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(optBubbleSort([6,0,3,5]));