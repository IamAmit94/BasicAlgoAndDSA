const findCeil = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let ceil = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return arr[mid]; // Target is present in the array
        } else if (arr[mid] < target) {
            // Search in the right half
            left = mid + 1;
        } else {
            ceil = arr[mid]; // Update ceil and search in the left half
            right = mid - 1;
        }
    }

    return ceil;
};

const sortedArray = [1, 2, 3, 4, 8, 10, 10, 12, 19];
const targetElement = 5;

const ceilValue = findCeil(sortedArray, targetElement);

console.log(`Ceiling of ${targetElement}: ${ceilValue}`);
