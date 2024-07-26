  /************************************************************************************************
   * *                                                                                            *
   * *       Logic behind the binary search
   * 
   *        1. Left = 0, Right = arr.length - 1
   *        2. Mid = Math.floor((Left + Right)/2)
   *        3. arr[mid] === element;  return element
   *        4. arr[mid] < element;    left = mid + 1
   *        5. arr[mid] > element;    right = mid - 1
   *        6. return -1 (elment not found)
   *        
   * *       index =   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]   
   * *       array =   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   *         targer =  2;  TO FOUND
   * 
   *        
   * 
   *         Step 1:  Math.floor((0 + 9)/2) = 4.5  ===> 4  ===> arr[4] ===> 5
   *                since 5 > 2    ||  arr[mid] > element;    right = mid - 1
   *            NOW UPDATED ARRAY
   * *             index =   [0, 1, 2, 3, 4]   
   * *             array =   [1, 2, 3, 4, 5];
   * 
   *            Now your left = arr[0], right = arr[4] = 3
   *                    updated mid = (0 + 3)/2 ====> 1
   *                        arr[1] ===> 2 Element found
   * *
   * *
   * *          we are shifting the positon of let and right element based on mid value of array.
   * *
   *                                                                     *
   *                                                                                              *
   * ************************************************************************************************
   */



  const binarySearch = (arr, element) => {

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {

        let mid =  Math.floor((left + right)/2);


        if(arr[mid] === element) {
            return `Element found ${arr[mid]}`
        } else if (arr[mid] > element) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
        return `Element not present in array !`

  }

  let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let targetElement = 19;


  const result = binarySearch(sortedArray, targetElement);
  console.log(`result ==== `, result);