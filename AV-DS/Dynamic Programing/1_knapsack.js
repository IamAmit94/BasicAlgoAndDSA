/**Knapscak
 * 
 * 3 types of knapsack
 * 1. Fractional knapsack: 
 * 2. 0/1 : It will take 0 or 1 ie complete or none
 * 3. Unbounded knapsack: There is no limit on the weight of items
 * 
 * 
 * Target is to get the maximum profit
 */

function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - weights[i - 1]] + values[i - 1]
                );
            }
        }
    }

    let result = dp[n][capacity];
    const selectedItems = [];

    let w = capacity;
    for (let i = n; i > 0 && result > 0; i--) {
        if (result !== dp[i - 1][w]) {
            selectedItems.push(i - 1);
            result -= values[i - 1];
            w -= weights[i - 1];
        }
    }
 
    return { maxValue: dp[n][capacity], selectedItems };
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 15;
const { maxValue, selectedItems } = knapsack(weights, values, capacity);
console.log("Max Value:", maxValue);
console.log("Selected Items:", selectedItems.map(item => ({ weight: weights[item], value: values[item] })));
// [ { weight: 3, value: 4 }, { weight: 2, value: 3 } ]