//  Search in Row wise And Column wise Sorted Array

// When searching for an element in a row-wise and column-wise sorted array, 
// you can use a binary search approach to efficiently locate the target element. 
// The idea is to start from either the top-right or bottom-left corner of the array and 
// iteratively move towards the target by eliminating rows or columns in each step.

// Here's a JavaScript code example for searching in a row-wise and column-wise sorted array:

const searchInSortedMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false; // Invalid matrix
    }

    const rows = matrix.length;
    const columns = matrix[0].length;

    // Start from the top-right corner
    let row = 0;
    let col = columns - 1;

    while (row < rows && col >= 0) {
        const currentElement = matrix[row][col];

        if (currentElement === target) {
            return true; // Element found
        } else if (currentElement < target) {
            // Move to the next row (downward)
            row++;
        } else {
            // Move to the previous column (leftward)
            col--;
        }
    }

    return false; // Element not found
};

// Example of usage with a sorted matrix
const sortedMatrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17],
];

const targetElement = 19;

const result = searchInSortedMatrix(sortedMatrix, targetElement);

if (result) {
    console.log(`Element ${targetElement} found in the matrix.`);
} else {
    console.log(`Element ${targetElement} not found in the matrix.`);
}
