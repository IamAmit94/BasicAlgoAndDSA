const linearSearch = (array, target) => {
  let size = array.length;
  if (!size) return `Empty Array provided !`;

  for (let i = 0; i < size; i++) {
    if (target === array[i]) return `' ${array[i]} ' Element found at index: " ${i} "`;
  }

  return `'${target}' element is not present in array`;
};

const data = linearSearch([2, 4, 5, 6, 7, 9, 87], 16);
console.log("data------", data);

console.log(`====linearSearch============`, data);



// worst-case performance ---- O(n)
// best-case performance ---- O(1)
// average-case performance ---- O(n)
// worst-case space complexity ---- O(1)