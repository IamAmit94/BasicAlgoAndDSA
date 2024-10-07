Pass By Value: ==> Primitive Data types (String, number, Boolean, null, Undefined)

(Both work independently in case of pass by value in js)
let a = 5;
let b = a

b = a + 5;

console.log(a) // 5
console.log(b) // 10


Pass By Refrence ===> Non Primitive Data Types (Object, Array)



let obj1 = {
    userName: "Alfa",
    password: "123"
}


let obj2 = obj1

obj2.pass = "ABC"

console.log(obj1) // { userName: 'Alfa', password: '123', pass: 'ABC' }
console.log(obj1) // { userName: 'Alfa', password: '123', pass: 'ABC' }

// both will be sharing the same memory as we are passing them as pass by refrence Same case is with the array. As in pass by refrence it wil change
// the orignal array


let arr1 = [1,2,3]

let arr2 = arr1;

arr2.push(4)


console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3, 4 ]








## IDENTIFICATION OF THE BACKTRACKING PROBLEMS

1. Choice + Decision
2. All Combinations
3. Controller Recursions
4. Numbers of choices
5. Size of constraints
6. Don't be greedy



# 5 Backtracking Problems

~~ LEVEL 1
1. Permutations of a string (Recursion ---> BT)
2. Largest Numbers in kth swap (Greedy)
3. N Digit number with  O digit in Increasing order

~~ LEVEL 2 ~
4. Rat in a maze
5. Word break
6. Palindrome Partioning
7. Combintational Sum
8. Sudoko
9. N Queues
10. Phone leter digits
