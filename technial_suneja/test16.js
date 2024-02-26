/****************************************
 *
 *          SORTING
 *          INSERTION sort OPTIMIZED FORM
 *
 * ***************************************/

// Selection Sort
// In the Insertion sort consider the 1st element to be the smallest and then compare the 1st element to the
//  remaning element and if it found that the pointer element is grater then the remaining element then swap 
// the element


const insertionSort = (arr) => {
    for(let i=1;i<arr.length;i++) {
        let curr = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>curr){ 
            arr[j+1]= arr[j];

            j--;
        }
        arr[j+1]=curr;
    }
    return arr;
}


let arr = [8,2,4,1,3]
const result = insertionSort(arr);
console.log(result) 