// WAP Last duplicate element in a sorted array

// ! We have a sorted array with duplicate elements and we have to find the index of last duplicate element and print index of it and also print the duplicate element. If no such element found print a message.

/**
Input : arr[] = {1, 5, 5, 6, 6, 7}
Output :
Last index: 4
Last duplicate item: 6

Input : arr[] = {1, 2, 3, 4, 5}
Output : No duplicate found

 */

// ? LOGIC

// for i = n-1 to 0
//    if (arr[i] == arr[i-1])
//         Print current element and its index.
//         Return

// If no such element found print a message    of no duplicate found.

const findLastIndexOfDuplicate = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === arr[i - 1]) {
      return `Index of duplicate element: ${arr[i]} is ${i}`;
    }
  }
};

console.log(findLastIndexOfDuplicate([1, 5, 5, 6, 6, 7, 9]));

// Push all the duplicate element in the array

const findAllDuplicates = (arr) => {
  let dupArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      dupArr.push(arr[i]);
    }
  }

  return dupArr;
};

console.log(findAllDuplicates([1, 5, 5, 6, 6, 7, 9]));
