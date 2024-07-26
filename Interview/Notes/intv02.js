// MAP FILTER REDUCE
// above are basiclly the array method which are mainly used to perform some operations on the array

/*************************************** MAP **************************** */
// What is map() ?
// The map() method creates a new array with the results of calling a provided function on every element in the
//  calling array.
// syntax of MAP
// arr.map((currentValue, index, arr)=> {
//     //code})

// const nums = [1,2,3,4];

// const multiplyThree = nums.map((num, i,arr) => {
//     // return num * 3;// will give [3,6,9,12]
//     return num * 3 + i; // will give [4,7,10,13] ie 1*3+1
// })

// console.log(multiplyThree)


/******************************FILTER ****************************** */
// What is filter() ?
// The filter() method creates a new array and applying the conditional statement to it. If the conditional statement
//  is true, the element is added to the new array. And If it is false, the element is not added to the new array.
// SYNTAX OF FILTER
// arr.filter((currentValue, index, arr)=> {
//     //code})

// const nums = [1,2,3,4];

// const moreThanTwo = nums.filter((num) => {
// return num > 2;
// });

// console.log(moreThanTwo)


/*************************************REDUCE**************************** */
// What is reduce() ?
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in
//  a single output value.
// SYNTAX OF REDUCE
// arr.reduce((accumulator, currentValue, currentIndex, arr) => {
//     //code}, initialValue)

// accumulator is the value of the previous computation. IF THERE IS NO INITIAL VALUE IT TAKES 1ST ELEMENT OF THE ARRAY
// AS VALUE FOR ACCUMULATOR

// const nums = [1,2,3,4];

// const sum = nums.reduce((acc, curr) => {
//     return acc + curr;
// },0);

// console.log(sum)

// /****************************************************** MAP FILTER REDUCE POLLYFILL ************************************* */
// // CREATING THE POLYFILL OF MAP

// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for(let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }

//     return temp;
    
// }

// // CREATING THE POLYFILL OF FILTER

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for(let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this)) {
//             temp.push(cb(this[i]))
//         }
//     }

//     return temp;
    
// }

// //this[i] ==> current element
// //i ==> Index
// // this ==> current array


// // CREATING THE POLYFILL OF REDUCE

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(accumulator, this[i], i, this): this[i]
    }

    return accumulator;
    
}


// // Diffrence btw Map and Foreach
// // map return the things and do not change the original array
// // In map we can chain the other array method to it. since it return the new array


// let arr = [1,2,3,4,5];

// const mapResult = arr.map((el) => el * 2); //  [ 2, 4, 6, 8, 10 ]

// const foreachResult = arr.forEach((ar, i) => arr[i] = ar + 10); // undefined since it do not return the new array

// console.log(arr) // it modifes the orignal array

// console.log('mapResult====>',mapResult , `foreachResult=====>`,foreachResult)



// //********************* */ MAP, REDUCE < FILTER Interview ques************************

// let students = [
//   { name: 'alfa', rollNum: 31, marks: 80 },
//   { name: 'beta', rollNum: 15, marks: 69 },
//   { name: 'gama', rollNum: 16, marks: 35 },
//   { name: 'theta', rollNum: 7, marks: 55 },
// ];

// // Q1: return student name in CAPS

// const names = students.map(stu => stu.name.toUpperCase())
// console.log(names);

// // Q2: return only details of those who scored more than 60 marks

// const score60 = students.filter((std) => std.marks > 60)

// console.log(score60)

// // Q3: Marks more than 60 and rollNumber greater than 15;

// const marksAndRollnumber = students.filter((stu) => stu.marks > 60 && stu.rollNum > 15);
// console.log(marksAndRollnumber);

// //Q4: Sum of marks of all students

// const sumAll = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(sumAll);

// //Q5: Return only name of studensts who scored more than 60

// const moreThan60 = students.filter(stu => stu.marks > 60).map(stu => stu.name)
// console.log((moreThan60));

// //Q6: return total marks for students with marks greater than 60 after 20 marks have been added to those who 
//       scored less than 60

// const complexProb = students.map((stu) => { if (stu.marks < 60) {
//                             stu.marks +=20 
// }
//                             return stu;
// }).filter((stu) => stu => stu.marks)
// .reduce((acc, curr) => acc + curr.marks, 0)
                            
// console.log(complexProb);
