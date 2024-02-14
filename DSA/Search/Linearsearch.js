const linearSearch = (array, val) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === val) return `Found element ${array[i]}`;
  }
  return `Nothing found `;
};

const data = linearSearch([2, 4, 5, 6, 7, 9, 87], 6);

console.log(`====linearSearch============`, data);
