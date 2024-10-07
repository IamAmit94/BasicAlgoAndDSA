// Subset of alphanumeric ignoring the number
const alfaNumeric = (str) => {
    let result = [];

    function isAlphabetOnly(char) {
        const regex = /^[A-Za-z]+$/;
        return regex.test(char);
    }

    let helper = (op, ip) => {
        if (ip.length === 0) {
            result.push(op);
            return;
        }

        if (isAlphabetOnly(ip[0])) {
            let op1 = op + ip[0].toUpperCase(); // First add the character before slicing
            let op2 = op + ip[0];
            helper(op1, ip.substring(1)); // Now slice the string
            helper(op2, ip.substring(1));
        } else {
            // Use a check to see if it's a digit
            if (!isNaN(ip[0])) {
                let op2 = op + ip[0];
                helper(op2, ip.substring(1)); // Now slice the string
            }
        }
    }

    helper('', str);

    return result;
}

const str = 'a1b2';
console.log(alfaNumeric(str));
