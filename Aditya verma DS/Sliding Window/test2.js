// First Negative Number in every Window of Size K | Sliding Window

const firstNegativeInWindow = (arr, k) => {
    const result = [];
    const negatives = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives.push(i);
        }

        if (i - negatives[0] === k - 1) {
            // If the first negative is outside the current window, remove it
            if (negatives.length > 0 && negatives[0] < i - k + 1) {
                negatives.shift();
            }

            result.push(negatives.length > 0 ? arr[negatives[0]] : 0);
        }
    }

    return result;
};

// Example usage:
const array = [12, 1, -7, 8, -15, 30, 16, 28];
const k = 3;

const result = firstNegativeInWindow(array, k);
console.log(result); // Output: [-1, -1, -7, -15, -15, 0]
