// Basic operation in Array

// ! 1. ARRAY TRAVERSAL


let arr1 = [1,2,3,4,5,6,7];
// used to fetch the element of the array
for(let key of arr1) {
    console.log('Array key ----- ',key)
}

// used to fetch the index of array
for(let key in arr1) {
    console.log(`Array index -----`,key)
}


// ! 2. INSERTION IN ARRAY

console.log('push -----',arr1.push(8));
console.log('Unshift -----',arr1.unshift(0));


console.log('Final Array ----',arr1);



// ! 3. DELETION IN ARRAY

// 1. SPLICE
let arr = [10, 20, 30, 40, 50];
// Remove 1 element at index 2 (removes element 30)
arr.splice(2, 1);  
console.log('splice------',arr);  // Output: [10, 20, 40, 50]

// Remove 2 elements starting from index 1 (removes 20 and 30)
arr.splice(1, 2);  
console.log('arr ======',arr);  // Output: [10, 50]


// 2. POP

let removedElement = arr.pop();
console.log('POP ===== ',removedElement);  // Output: 40
console.log('arr ==== ',arr);  // Output: [10, 20, 30]


// 3. SHIFT


let shiftElement = arr.shift();
console.log('shiftElement=====',shiftElement);  // Output: 10
console.log('arr======',arr);  // Output: [20, 30, 40]




// 4. DELETE


delete arr[2];  // Removes the element at index 2 (which is 30)
console.log('delete =====>',arr);  // Output: [10, 20, undefined, 40]
console.log('arr.length=====',arr.length);  // Output: 4 (length remains unchanged)


// 5. FILTER

// todo Note: filter() creates a new array and does not modify the original array, unlike the splice() method.

let newArr = arr.filter(element => element !== 30); // Removes 30 from the array
console.log('filter=======',newArr);  // Output: [10, 20, 40, 50]
console.log('arr====',arr);  // Original array remains unchanged


// ! 4. SEARCH IN ARRAY


// 1. INDEX 

// let arr = [10, 20, 30, 40, 50];
let index = arr.indexOf(30); // Returns the index of 30
console.log('index ===== '+index);  // Output: 2

let notFound = arr.indexOf(60); // Element not found
console.log('notFound ===== ',notFound);  // Output: -1

// 2. INCLUDES

let isPresent = arr.includes(30); // Checks if 30 is in the array
console.log('INCLUDES =====',isPresent);  // Output: true

let isNotPresent = arr.includes(60); // Checks if 60 is in the array
console.log('isNotPresent =====',isNotPresent);  // Output: false

// 3. FIND

let found = arr.find(element => element > 25);  // Finds the first element greater than 25
console.log('find ======= ',found);  // Output: 30

let notFounded = arr.find(element => element > 100);  // No element found greater than 100
console.log('notFounded ==== ',notFounded);  // Output: undefined


// 4. FINDINDEX


let findINdex = arr.findIndex(element => element > 25);  // Finds the index of the first element > 25
console.log('findINdex ====',findINdex);  // Output: 2 (index of 30)

let notFoundIndex = arr.findIndex(element => element > 100);  // No element greater than 100
console.log('notFoundIndex ==== ',notFoundIndex);  // Output: -1

