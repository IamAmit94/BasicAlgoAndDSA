// Sort the array using recursion

// Function to insert an element into a sorted array
function insert(arr, temp) {
    // If array is empty or the last element is less than or equal to temp, insert temp at the end
    if (arr.length === 0 || arr[arr.length - 1] <= temp) {
        arr.push(temp);
        return;
    }
    // Remove the last element
    const val = arr.pop();
    // Recursively call insert to find the correct position for temp
    insert(arr, temp);
    // Push the removed element back to the array
    arr.push(val);
}

// Function to sort the array using the insert function
function sort(arr) {
    // Base case: if the array has 1 or no elements, it is already sorted
    if (arr.length <= 1) {
        return;
    }
    // Remove the last element
    const temp = arr.pop();
    // Recursively sort the remaining array
    sort(arr);
    // Insert the removed element into the sorted array
    insert(arr, temp);
}

// Example usage
const arr = [9, 0, 1, 4, 90, 67, 2, 120];
sort(arr);

// Print sorted array
console.log(arr.join(' ')); // Output will be: 0 1 2 4 9 67 90 120
