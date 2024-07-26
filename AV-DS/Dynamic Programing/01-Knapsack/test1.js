function knapSackRecursive(W, weights, values, n) {
    // Base Case: If no items left or capacity becomes 0
    if (n === 0 || W === 0) {
        return 0;
    }

    // If weight of the nth item is more than Knapsack capacity W,
    // then this item cannot be included in the optimal solution
    if (weights[n - 1] > W) {
        return knapSackRecursive(W, weights, values, n - 1);
    } else {
        // Return the maximum of two cases:
        // (1) nth item included
        // (2) not included
        const includeItem = values[n - 1] + knapSackRecursive(W - weights[n - 1], weights, values, n - 1);
        const excludeItem = knapSackRecursive(W, weights, values, n - 1);
        return Math.max(includeItem, excludeItem);
        // return { includeItem,  excludeItem}
    }
}

// Example usage:
const values = [60, 100, 120];
const weights = [10, 20, 30];
const W = 50;
const n = values.length;

const maxValue = knapSackRecursive(W, weights, values, n);
console.log(maxValue); // Output: 220
