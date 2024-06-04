
/**
 * let arr = [2,3,1,5,1];
 * init i = 0;
 * 
 * while(i< size) {
 * if(array[i] != array(array[i-1])) {
        swap(array[i], array[i-1]);
 } else {
     i++
 }
 * }

 for(int i = 0; i < size; i++) {
     if(array[i] != i+1) {
         i+1 = missing Element
         arr[i] = duplicate element
     }
 }
 */

 function findDuplicateAndMissing(arr) {
    let i = 0;
    const size = arr.length;

    // Step 1: Move duplicate element to the correct position using swapping
    while (i < size) {
        console.log(`arr[arr[i] - 1]===`,arr[i])
        if (arr[i] !== arr[arr[i] - 1]) {
            // Swap arr[i] with arr[arr[i] - 1]
            const temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        } else {
            i++;
        }
    }
    console.log('Sorted Array----',arr)

    // Step 2: Find the missing and duplicate elements
    let duplicate = -1;
    let missing = -1;

    for (let i = 0; i < size; i++) {
        if (arr[i] !== i + 1) {
            duplicate = arr[i];
            missing = i + 1;
            break;
        }
    }

    return [duplicate, missing];
}

// Test the function
const arr = [2, 3, 1, 5, 1];
const result = findDuplicateAndMissing(arr);
console.log("Duplicate and Missing Elements:", result);
