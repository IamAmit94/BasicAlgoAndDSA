const eat = ['apple','orange', 'grapes','mango'];
// eat.pop()
// console.log(eat)


Array.prototype.myPop = function() {
    if(this.length === 0){
        return undefined;
    } else {
        const lastIndex = this.length -1; // last element index
        const popElement = this[lastIndex]; // last index
        this.length = lastIndex; // minimize the current array
        return popElement
    }
}


eat.myPop()
console.log(eat)