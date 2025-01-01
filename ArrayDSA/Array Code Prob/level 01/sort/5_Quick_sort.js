// Quick Sort

const pivot = (arr, start = 0, end = arr.length - 1) => {
    // let end = arr.length - 1;
    // let start = 0;
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start + 1; i < end; i++) {
         if(pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
         }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
}


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    // let left = 0;
    // let right = arr.length - 1;

    if(left < right) {
        let pivotIndex = pivot(arr, left, right) 
        {   
            // Left
            quickSort(arr, left, pivotIndex-1);
            // Right
            quickSort(arr, pivotIndex + 1, right)
        }
    }
    return arr;
}


console.log(quickSort([8,3,5,4,7,6,1,2]))