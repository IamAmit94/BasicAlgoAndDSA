// count the unique numnbers
//
// [1,1,2,2,3,4,4,5,6,7,8,8]
// output ===> 8
// logic
// i = 0; j = 1;
// if i & j value same then j ++
// array[i] != array[j]
// 1. i++
// 2. array[i] =array[j]; //swap

const countUniqueNumber = (array) => {
  if (array.length !== 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
    }
    return i + 1; // Since I is starting from the 0 is the reason we have added the 1 to it
  } else {
    throw new Error("Array is Empty !");
  }
};

const result = countUniqueNumber([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);

console.log(`result ======> `, result);


// fetch the unique element from the array
// your 1st element will always be unique so push that element
// now we will be comparing the j to it's previous value
// if j !== j-1 then we will push it
const countUniqueNumber1 = (array) => {
  let uniqElem = [];

  if (array.length !== 0) {
      uniqElem.push(array[0]);

      for (let j = 1; j < array.length; j++) {
          if (array[j] !== array[j - 1]) {
              uniqElem.push(array[j]);
          }
      }

      return uniqElem.length;
  } else {
      throw new Error('Array is Empty!');
  }
}

const result1 = countUniqueNumber1([0, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);

console.log(`result ======> `, result1);

