Dynamic Programing:

Dynamic programing is baiscally enhanced recursion. It is combination of Recursion and storage.

HOW TO IDENTIFY THE DP PROBLEM:-
1. Choice will be given
2. Optimal thing will be asked(ie min or max , largest or smallest will be asked  )


Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the results for future reference. It is an optimization technique used to improve the efficiency of algorithms by avoiding redundant computations.

In JavaScript, dynamic programming can be implemented using various approaches, including memoization and tabulation. Here's a brief explanation of each:

1. Memoization: Memoization is a `top-down approach` where the results of subproblems are stored in a cache (usually an object or an array) to avoid recomputing them. When a subproblem is encountered, the algorithm first checks if its result is already cached. If so, it returns the cached result; otherwise, it computes the result and stores it in the cache for future use. This technique is commonly used for recursive algorithms.

// Memoization example
const memo = {};
function fibonacci(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}

2. Tabulation: Tabulation is a `bottom-up approach` where the results of subproblems are stored in a table (usually a 2D array) and computed iteratively from the bottom-up. Each cell in the table represents the solution to a subproblem, and the final solution is obtained by combining the solutions of all subproblems. Tabulation is often used for problems where the dependencies between subproblems can be represented using a table-like structure.

// Tabulation example (Dynamic programming to find the nth Fibonacci number)
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}




Dynamic programming problem:-
1. 0-1 knapsack (6)
2. unbounced kanpsack (5)
3. Fibommacci (7)
4. LCS Longest Common Subsequence (15)
5. LIS Longest Increasing Subsequence (10)
6. Kadane's Algorithm
7. Matrix chair multiplication
8. Dp on Trees
9. DP on Grid
10. Others


1. Knapsack Problem
    a. Subset sum
    b. Equal sum partition
    c. Count of subset sum
    d. Minimum subset diffrence
    e. Target sum
    f. # of subset