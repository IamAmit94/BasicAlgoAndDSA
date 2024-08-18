// Pollyfill Filter

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// The diffrence between the map and filter is that map iterate all over the array on the other hand filter iterate only those element which
// satisfy the condition



// Syntax for Filter
// array.filter(function(currentValue, index, arr), thisValue)


Array.prototype.myFilter = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) temp.push(this[i])
        
    }
    return temp;
}

const nums = [1,2,3,4];

const moreThanTwo = nums.myFilter((num, i, arr) => {
    return num > 2;
})

console.log(moreThanTwo)
