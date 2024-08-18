// const fibonaciNum = (min, max) => {

//     let a = 0, b = 1;
//     let fibNumArr = [];

//     while(b<=max) {
//         if(b>=min) {
//             fibNumArr.push(a)
//         }
//         [a,b] = [b, a+b]
//     }

//     return fibNumArr
// }


// const result = fibonaciNum(1,10) 
// console.log(result)



function findFibonacciInRange(min, max) {
    let fibNumbers = [];
    
    function fibonacci(a, b) {
        if (b > max) {
            return;
        }
        if (b >= min) {
            fibNumbers.push(b);
        }
        fibonacci(b, a + b);
    }
    
    fibonacci(0, 1);
    
    return fibNumbers;
}

const min = 1;
const max = 10;
const fibonacciNumbers = findFibonacciInRange(min, max);

console.log(fibonacciNumbers);
