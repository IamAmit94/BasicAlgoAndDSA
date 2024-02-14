// Binary Search
// Divide and conquer property

//Find the index of the given  no in a sorted array 7
//  ==> Index 6 -> output

// min = 0, element = 1;
// max = array.length-1, element = 15
// minIndex=(min+max)/2  => (0+14)/2 ==> 7(index) => element = 8
// if array[minIndex] < number(7)
// then min= minIndex + 1;
// array[minIndex] > number;
//max=minIndex-1, min=0, max=6 {1,2,3,4,5,6,7}

const binarySearch = (array, num) => {
  console.log("Given array ======>", array);
  console.log("Num to find ======>", num);
  let min = 0;
  let max = array.length - 1;
  console.log("Before min ======>", min);
  console.log("Before max ======>", max);

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    console.log("midIndex===>", midIndex);
    if (array[midIndex] < num) {
      //
      min = midIndex + 1;
      console.log("min===>", min);
    } else if (array[midIndex] > num) {
      max = midIndex - 1;
      console.log("max===>", max);
    } else {
      return midIndex;
    }
  }
  return "Element not present in array";
};

const result = binarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);

console.log("result =====> ", result);
