/**
 *          floor   ceil
 * 7.8  ==>  7       8
 * 
 * 
 * 1,2,3,4,8,10,10,12,19
 * floor of 5 = 4
 * Floor = greatest element smaller than 5
 */

const findFloor = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return arr[mid]; // Target is present in the array
        } else if (arr[mid] < target) {
            floor = arr[mid]; // Update floor and search in the right half
            left = mid + 1;
        } else {
            // Search in the left half
            right = mid - 1;
        }
    }

    return floor;
};

const sortedArray = [1, 2, 3, 4, 8, 10, 10, 12, 19];
const targetElement = 5;

const floorValue = findFloor(sortedArray, targetElement);

console.log(`Floor of ${targetElement}: ${floorValue}`);
