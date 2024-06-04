function unboundedKnapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(capacity + 1).fill(0);

    // Build the dynamic programming table
    for (let i = 0; i <= capacity; i++) {
        for (let j = 0; j < n; j++) {
            if (weights[j] <= i) {
                // If the weight of the current item is less than or equal to the capacity
                // We can choose to include the current item or not
                dp[i] = Math.max(dp[i], dp[i - weights[j]] + values[j]);
            }
        }
    }

    return dp[capacity];
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const maxValue = unboundedKnapsack(weights, values, capacity);
console.log("Max Value:", maxValue);
