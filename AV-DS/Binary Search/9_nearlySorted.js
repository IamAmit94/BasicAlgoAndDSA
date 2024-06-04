const searchNearlySorted = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found at index mid
        }

        // Check the element to the left of mid
        if (mid - 1 >= left && arr[mid - 1] === target) {
            return mid - 1;
        }

        // Check the element to the right of mid
        if (mid + 1 <= right && arr[mid + 1] === target) {
            return mid + 1;
        }

        if (arr[mid] > target) {
            right = mid - 2; // Search in the left side
        } else {
            left = mid + 2; // Search in the right side
        }
    }

    return -1; // Element not found
};

let arr = [5, 10, 20, 30, 40];
let target = 20;

const index = searchNearlySorted(arr, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}
