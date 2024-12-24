// Third largest element in an array of distinct elements

/**

Given an array of n integers, find the third largest element. All the elements in the array are distinct integers. 
Example : 

Input: arr[] = {1, 14, 2, 16, 10, 20}
Output: The third Largest element is 14

Explanation: Largest element is 20, second largest element is 16 
and third largest element is 14

Input: arr[] = {19, -10, 20, 14, 2, 16, 10}
Output: The third Largest element is 16

Explanation: Largest element is 20, second largest element is 19 
and third largest element is 16 

 */



const thirdLargestELement1 = (arr) => {


    // check if the length of the array is less than 3 then it will give invalid input

    if(arr.length < 3) {
        return `Invalid input min Array element is needed to be 3`
    } else {
        arr.sort((a,b) => a - b);

        return {
            highest_Element: arr[arr.length - 1],
            second_highest : arr[arr.length - 2],
            third_highest: arr[arr.length - 3]

        }
    }
}



const thirdLargestELement = (arr) => {

    let first = arr[0];
    let second = Infinity;
    let third = Infinity;
    // check if the length of the array is less than 3 then it will give invalid input

    if(arr.length < 3) {
        return `Invalid input min Array element is needed to be 3`
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > first) {
                third = second;
                second = first;
                first = arr[i];
            }else if (arr[i] > second) 
                { 
                    third = second; 
                    second = arr[i]; 
                } 
          
                /* If arr[i] is in between second and third */
                else if (arr[i] > third) 
                    third = arr[i]; 
            } 

            return {
                first,
                second, 
                third
            };
        }
}


console.log(thirdLargestELement([12, 13, 1, 10, 34, 16]))