// Reduce polyfill


// syntax
//arr.reduce((accum, curentVal,i, arr) => {}, initialValue)



// NOTE: In case user forgot to give the value of the intialValue so `Accumulator` will take the array 1st element as Accumulator value
//       and the currentVal is assigned the 2nd value of array
Array.prototype.myReduce = function(cb, initlaValue) {
    let accumulator = initlaValue;

    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;

}

const nums = [1,2,3,4,5];

const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
},0)

console.log(sum)