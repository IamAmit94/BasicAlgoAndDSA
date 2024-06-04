// count the frequency of number

function digitFrequency(num) {
    const frequencyCounter = {};

    // Convert number to string to iterate over each digit
    const numStr = num.toString();

    for (let digit of numStr) {
        if (digit !== '.') { // Ignore decimal point if present
            frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
        }
    }

    return frequencyCounter;
}

console.log(digitFrequency(112233)); // { '1': 2, '2': 2, '3': 2 }
console.log(digitFrequency(987654321)); // { '9': 1, '8': 1, '7': 1, '6': 1, '5': 1, '4': 1, '3': 1, '2': 1, '1': 1 }
