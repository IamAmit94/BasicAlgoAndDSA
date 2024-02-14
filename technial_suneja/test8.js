/*********************************************
 *
 *              OPTIMIZED WAY
 *
 * *******************************************
 */

//checking Square in another array
// arr1 = [1,2,3,4] , arr2=[1,9,4,16]; || case 1
// arr1 =[1,2,4,2] arr2=[1,4,4,16]; || case 2
// map1 {1:1,2:1,3:1,4:1}
// map2 {1:1,9:1,4:1,16:1}

const checkSquare = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};
  for (let element of array1) {
    map1[element] = (map1[element] || 0) + 1;
    // console.log(map1[element])
  }
  console.log(`map1 ==== `, map1);
  for (let element of array2) {
    map2[element] = (map2[element] || 0) + 1;
    // console.log(map2[element])
  }
  console.log(`map2 ==== `, map2);

  for (let key in map1) {
    if (!map2[key * key]) {
      // obj key compare in term of Square
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // value compare
      return false;
    }
  }
  return true;
};

  const result = checkSquare([1, 2, 3, 4], [1, 9, 4, 16]);
  // const result = checkSquare('listen', 'silent');

  console.log(`result================>`, result);

// TimeComplexity = o(n);
