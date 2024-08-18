// syntax for the map pollyfill
// Map return the new array




// Array.map((num, i, arr) => { })
// num --> Current Element
// i ---> Index
// arr ---> array





Array.prototype.myMap =function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this))
    }
    return temp;
}


const nums = [1,2,3,4];

const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 3;
})

console.log(multiplyThree)