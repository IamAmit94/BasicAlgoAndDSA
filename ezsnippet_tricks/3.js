// filter in js: It's a higher order function means it accept the function inside it


let alphabet = ['a','b', 'c','d','e','f'];

// const data = alphabet.filter((item) => {
// return item != 'a'
// })

const data = alphabet.filter((item) => item != "a");

console.log(data)