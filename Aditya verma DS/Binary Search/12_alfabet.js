const nextAlphabeticalElement = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let nextElement = null;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > target) {
            nextElement = arr[mid];
            right = mid - 1; // Search in the left half for a smaller element
        } else {
            left = mid + 1; // Search in the right half for a larger element
        }
    }

    return nextElement;
};

const sortedArray = ['a', 'c', 'e', 'g', 'i', 'k'];
const targetElement = 'd';

const nextElement = nextAlphabeticalElement(sortedArray, targetElement);

console.log(`Next alphabetical element after ${targetElement}: ${nextElement}`);
