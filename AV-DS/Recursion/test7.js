// Print the balance Parantheses

const balanceParanthese = (n) => {
    const result = [];

    const generateParentheses = (current, open, close) => {
        // If the current string has reached the maximum length, add it to the result
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // If we can still add an open parenthesis, add it
        if (open < n) {
            generateParentheses(current + '(', open + 1, close);
        }

        // If we can still add a close parenthesis, add it
        if (close < open) {
            generateParentheses(current + ')', open, close + 1);
        }
    };

    // Initialize the recursion with an empty string and 0 open/close counts
    generateParentheses('', 0, 0);

    return result;
}

const n = 3;
console.log(balanceParanthese(n));



// n = 3
//output : ()()(), ((())), ()(()),(())(), (()())