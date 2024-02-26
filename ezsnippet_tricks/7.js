// join in js

const countries = ['india', 'pakistan'];

// let joined = countries.join('|'); // if we do not provide '|' then bydefault it accept the ','[comma]
// console.log(joined); // india|pakistan


Array.prototype.myJoin = function(separator = ','){ 

    let result = '';
    for (let i = 0; i < this.length; i++) {
       
        result += this[i];
        if(i!== this.length -1) { // we do not want to insert at the end
            result += separator;
        }
    }
    return result;
}

let joined = countries.myJoin('=');
console.log(joined)