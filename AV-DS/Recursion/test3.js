// WAP to find all the subset of the given string using recursion
            /************************************* *
            * 
            *         🌟🌟 SUBSET 🌟🌟          
            * 
            ************************************* */

//using normal fuction
// function subSet (str) {

// let result  = [];

// function helper (op, ip) {

//         if(ip.length === 0) {
//             result.push(op);
//             return;
//         }


//         let op1 = op + ip[0]
//         let op2 = op
//         ip = ip.substring(1)

//         helper(op1, ip);
//         helper(op2,ip)

// }

// helper('', str);

// return result;

// }


// using the arrow function
const subSet = (str) => {

    let result = [];

    let helper = (op, ip) => {
        // Base condition: if ip (input) is empty, add the output to the result and return
        if (ip.length === 0) {
            result.push(op);
            return;
        }

        let op1 = op + ip[0];  // Include the first character in the subset
        let op2 = op; // Exclude the first character in the subset

        ip = ip.substring(1); // Remove the first character from ip

        // Recursively call helper function for both cases
        helper(op1, ip);
        helper(op2, ip);
    }

    // Initial call to helper function
    helper('', str);

    return result; 
}

let str = 'abc';
console.log(subSet(str)); 




/**
 *                                 OP = '' IP = 'abc'
                                                abc
                            a ✅                                     a ❌
                        OP1      IP                             OP2         IP    
                        'a'     'bc'                            ' '        'bc'



















 */