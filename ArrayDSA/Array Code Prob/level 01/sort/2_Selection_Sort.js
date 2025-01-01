// Selection Sort

const selectionSort = (arr) => {
    console.log('Unsorted Arr ------ ',arr);

    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i+1; j < arr.length; j++) {

            if(arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }

    return arr;
}


console.log(selectionSort([5,3,4,1,2]))