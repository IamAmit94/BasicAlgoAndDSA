const firstNegativeNumberInWindow = (arr, k) => {


    if(k > arr.length) {
        return `invalid window size is passed !`
    }
    let i = 0; // start
    let j = 0; // end
    const tempStore = []; // Temporary store for negative numbers in the current window
    const finalAns = []; // Final answer array

    while (j < arr.length) {
        // If the element at the end of win size is negative, add it to tempStore
        if (arr[j] < 0) {
            tempStore.push(arr[j]);
        }

        // If the size of the current window is less than k, increment the right pointer
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 == k) {
            // If the size of the current window is exactly k
            if (tempStore.length == 0) {
                finalAns.push(0); // No negative number in the current window so add 0 to it
             
            } else {
                finalAns.push(tempStore[0]); // First negative number in the current window
                // If the element at the start of window is negative, remove it from tempStore ie if there are 2 -ve in tempStore
                if (arr[i] === tempStore[0]) {
                    tempStore.shift();
                    
                }
            }
            // Slide the window forward
            j++;
            i++;
            // console.log('final Anss===',finalAns)
            // console.log('tempStore====>',tempStore)
        }
    }

    return finalAns;
}

const arr = [12, 1, -7, 8, -15, 30, 16, 28];
const k = 3;
console.log(firstNegativeNumberInWindow(arr, k)); // Output: [ -7, -7, -7, -15, -15, 0 ]
