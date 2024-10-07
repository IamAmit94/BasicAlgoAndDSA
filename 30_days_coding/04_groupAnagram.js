// Group Anagram


const groupAnagram = (arr) => {

const map = new Map()

for(let word of arr) {

    const sortedWord = word.split('').sort().join('')
    console.log(sortedWord)

    if(map.has(sortedWord)) {
        map.get(sortedWord).push(word)
    }
    else {
        map.set(sortedWord, [word])
    }
}
// console.log(Array.from(map.values()))
return Array.from(map.values())


}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))