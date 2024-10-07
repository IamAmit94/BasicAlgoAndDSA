// Permutation of string finding the unique character using recursion

const permutaionString = (ip) =>  {
    let result = [];

    let solve = (ip, op, result) => {
        // Base condition: if the input string is empty, add the output string to the result
        if (ip.length === 0) {
            result.push(op);
            return;
        }
    
        let mp = new Set();  // Create a set to track characters we have already processed
    
        for (let i = 0; i < ip.length; i++) {
            // Check if the current character is already in the set
            if (!mp.has(ip[i])) { // controlled recursion
                mp.add(ip[i]);  // Add the character to the set
    
                // Create a new input string by excluding the current character
                let newIp = ip.substring(0, i) + ip.substring(i + 1);
                
                // Add the current character to the output string
                let newOp = op + ip[i];

                // Recurse with the new input and output strings
                solve(newIp, newOp, result);
            }
        }
    }


    solve(ip, "", result);

    return result;
}

// Example usage
const inputStr = "aabc";
const permutations = permutaionString(inputStr);
console.log(permutations);
