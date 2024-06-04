function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(1); // 1
// digitCount(25); // 2
// digitCount(314); // 3

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}


// mostDigits([1234, 56, 7]); // 4
// mostDigits([1, 1, 11111, 1]); // 5
// mostDigits([12, 34, 56, 78]); // 2

mostDigits([23,567,89,12234324,90])










