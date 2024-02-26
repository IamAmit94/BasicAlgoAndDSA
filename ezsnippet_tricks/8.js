// push in js

const arr = [1,2,3,4,5,6]
// arr.push(7)
// console.log(arr)


Array.prototype.myPush = function(...elements) { // since we need the multiple limits
    for(let element of elements) {
        this[this.length] = element;
    }

    return this.length;
}

arr.myPush(7,8,9);
console.log(arr)