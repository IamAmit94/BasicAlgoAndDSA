// Counting Sort

const countingSort = (arr) => {
    if (arr.length <= 1) return arr; // No need to sort an array of length 1 or less

    // Find the maximum and minimum elements in the array
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    // Create a count array to store the frequency of each element
    let count = new Array(max - min + 1).fill(0);
    console.log('count ======',count)

    // Store the count of each number
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Reconstruct the sorted array
    let sortedArr = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArr.push(i + min); // Add the element back into the sorted array
            count[i]--;
        }
    }

    return sortedArr;
}

// Example usage
let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
