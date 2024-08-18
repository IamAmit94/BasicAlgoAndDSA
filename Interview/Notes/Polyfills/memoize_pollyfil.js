// Implement caching/Memoize function



function myMemoize(fn, context) {
    const res = {};

    return function (...args) {
        var argsCache = JSON.stringify(args);

        if(res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        } 
            return res[argsCache]
    }
}





const clumsySquare  = (num1, num2) => {
    for(let i = 0; i<=100000000000; i++){
        return num1 * num2
    }
}


const memoizedProduct = myMemoize(clumsySquare)

console.time("first Call");
console.log(memoizedProduct(1234,5427))
console.timeEnd("First call")



console.time("second Call");
console.log(memoizedProduct(1234,5427))
console.timeEnd("second call")


// console.time("first Call");
// console.log(clumsySquare(1234,5427))
// console.timeEnd("First call")



// console.time("second Call");
// console.log(clumsySquare(1234,5427))
// console.timeEnd("second call")