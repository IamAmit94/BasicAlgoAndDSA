const findMaximumNum = (str, k) => {
  let ans = str;
  let size = str.length;

  const solve = (start, s, k) => {
    if (k === 0 || start === size) {
      if (s > ans) {
        ans = s;
      }
      return;
    }

    // find Max
    let maxValue = s[start];
    for (let j = start + 1; j < size; j++) {
      if (s[j] > maxValue) {
        maxValue = s[j];
      }
      // return maxValue
    }

    for (let i = start + 1; i < size; i++) {
      if (s[i] > s[start] && s[i] === maxValue) {

        s = swap(s, start, i);

        solve(start + 1, s, k - 1);

        s = swap(s, start, i);
      }
    }
    solve(start + 1, s, k);

    // return ans;
  };

  const swap = (s, i, j) => {
    let charArray = s.split('');
    [charArray[i], charArray[j]] = [charArray[j],charArray[i]]
    return charArray.join('');
  }

  solve(0, str, k);
  return ans;
};

// Example usage
let numStr = "9234";
let k = 1;
console.log(findMaximumNum(numStr, k)); // Output: "999984211"
