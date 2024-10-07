//https://www.geeksforgeeks.org/problems/shop-in-candy-store1145/1
/**
 In a candy store, there are n different types of candies available and the prices of all the N different types of candies are provided to you. You are now provided with an attractive offer.

For every candy you buy from the store and get K other candies ( all are different types ) for free. Now you have to answer two questions. Firstly, you have to find what is the minimum amount of money you have to spend to buy all the n different candies. Secondly, you have to find what is the maximum amount of money you have to spend to buy all the n different candies.

In both the cases you must utilize the offer i.e. you buy one candy and get k other candies for free.

Examples :

Input: n = 4, k = 2, candies[] = {3 2 1 4}
Output: 3 7

Explanation: As according to the offer if you buy one candy you can take at most two  more for free. So in the first case, you buy the candy which costs 1 and takes candies worth 3 and 4 for free, also you buy candy worth 2 as well.So min cost : 1+2 =3. In the second case, you can buy the candy which costs 4 and takes candies worth 1 and 2 for free, also you need to buy candy worth 3 as well. So max cost : 3+4 =7.
Input: n = 5, k = 4, candies[] = {3 2 1 4 5}
Output: 1 5

Explanation: For minimimum cost buy the candy with the cost 1 and get all the other candies for free. For maximum cost buy the candy with the cost 5 and get all other candies for free.
 */


function candyStore(candies, N, K) {
    // Sort the candies
    candies.sort((a, b) => a - b);

    // Calculate minimum cost
    const calculateMinCost = () => {
        let mini = 0;
        let buy = 0;
        let free = N - 1;

        while (buy <= free) {
            mini = mini + candies[buy]; // Buy the cheapest candy
            buy++;
            free = free - K; // Skip the next K candies
        }

        return mini;
    };

    // Calculate maximum cost
    const calculateMaxCost = () => {
        let maxi = 0;
        let buy = N - 1; // Start from the most expensive candy
        let free = 0;

        while (free <= buy) {
            maxi = maxi + candies[buy]; // Buy the most expensive candy
            buy--;
            free =free + K; // Skip the next K candies
        }

        return maxi;
    };

    const miniCost = calculateMinCost();
    const maxiCost = calculateMaxCost();

    return [miniCost, maxiCost];
}

// Example usage:
const candies = [3, 2, 1, 4];
const N = candies.length;
const K = 2;

// const candies = [3, 2, 1, 4, 5]
// const N = candies.length;;
// const K = 4;

const result = candyStore(candies, N, K);
console.log(`Minimum Cost: ${result[0]}, Maximum Cost: ${result[1]}`);









