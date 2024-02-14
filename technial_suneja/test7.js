/*********************************************
 *
 *              UNOPTIMIZED WAY
 *
 * *******************************************
 */

//checking Square in another array
// arr1 = [1,2,3,4] , arr2=[1,9,4,16];
// if(arr1[i] * arr1[i] === arr2[j]) return true
// let isSquare=true

const findSquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return "Both arrays should have the same length";
  } else {
    for (let i = 0; i < arr1.length; i++) {
      let isSquare = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] * arr1[i] === arr2[j]) {
          isSquare = true;
        }

        if (j === arr2.length - 1) {
          if (!isSquare) {
            return false;
          }
        }
      }
    }
    return true;
  }
};

const result = findSquare([1, 2, 3, 4], [1, 9, 4, 16]);

console.log("result ======>", result);



// TimeComplexity = o(n^2);
