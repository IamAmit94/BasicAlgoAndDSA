function insertionSort(arr){
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

let arr = [2,1,9,76,4]
console.log(insertionSort(arr))