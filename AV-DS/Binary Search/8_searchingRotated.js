/**Find the element in the agnoistic array
 * 
 * 
 * steps
 * 1. find the index of the minimum element
 * 2. once the index is find search both the sorted array left and right
 * 3. BS( arr, start, end)
 *   BS(arr,index, size-1)
 */



const searchInRotatedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found at index mid
        }

        // Check if the left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        }

        // Check if the right half is sorted
        else {
            if (arr[right] <= target && target < arr[mid]) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
    }

    return -1; // Element not found
};

let arr = [11, 12, 15, 18, 2, 5, 6, 8];
let target = 15;

const index = searchInRotatedArray(arr, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}
