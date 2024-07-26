
// 1. charAt(index): Returns the character at the specified index.
let str = "hello";
console.log(str.charAt(1)); // "e"

/** ############################################################################################################### */
// 2. charCodeAt(index): Returns the Unicode of the character at the specified index.
let str1 = "hello";
console.log('charCodeAt ==>',str1.charCodeAt(1)) // 101


/** ############################################################################################################### */
// 3. concat(string2, string3, ..., stringN): Concatenates the string arguments to the calling string and returns a new string.

let str2 = "Hello";
let str3 = "World";
console.log('Concat  ==>',str2.concat(" ", str3)) // "Hello World"

/** ############################################################################################################### */

// 4. includes(searchString, position): Determines whether one string may be found within another string.

let str4 = "Hello world";
console.log('INcludes ===> ',str4.includes("world")); // true

/** ############################################################################################################### */

// 5. endsWith(searchString, length): Determines whether a string ends with the characters of a specified string.

console.log('Ends with === ',str4.endsWith("world")); // true

/** ############################################################################################################### */

// 6. lastIndexOf(searchValue, fromIndex): Returns the index within the calling String object of the last occurrence of the specified value.

console.log('lastIndexOf === ',str4.lastIndexOf("world")); // 13

/** ############################################################################################################### */

// 7. match(regexp): Retrieves the matches when matching a string against a regular expression.

console.log('Match ===>',str2.match(/o/g)); // ["o", "o"]


/** ############################################################################################################### */
// 8. repeat(count): Returns a string consisting of the elements of the object repeated the given times.


console.log('Repeat ===> ',str.repeat(3)); // "HelloHelloHello"


/** ############################################################################################################### */

// 9. replace(searchValue, newValue): Returns a new string with some or all matches of a pattern replaced by a replacement.

console.log('Replace ===> ',str4.replace("world", "there")); // "Hello there"

/** ############################################################################################################### */

// 10. replaceAll(searchValue, newValue): Returns a new string with all matches of a pattern replaced by a replacement.

let str5 = "Hello world, hello";
console.log('Replace All ===> ',str5.replaceAll("hello", "hi")); // "Hello world, hi"

/** ############################################################################################################### */

// 11. search(regexp): Executes a search for a match between a regular expression and this String object.

console.log('Search ===> ',str4.search("world")); // 6

/** ############################################################################################################### */

// 12. slice(beginIndex, endIndex): Extracts a section of a string and returns it as a new string, without modifying the original string.

console.log('Slice === >' ,str4.slice(0, 5)); // "Hello"

/** ############################################################################################################### */

// 13. split(separator, limit): Splits a String object into an array of strings by separating the string into substrings.

console.log('split ===> ',str4.split(" ")); // ["Hello", "world"]

/** ############################################################################################################### */

// 14. startsWith(searchString, position): Determines whether a string begins with the characters of a specified string.

console.log('startsWith ===> ',str.startsWith("Hello")); // true

/** ############################################################################################################### */

// 15 . substring(indexStart, indexEnd): Returns the part of the string between the start and end indexes, or to the end of the string.

console.log('subString ==> ',str4.substring(0, 5)); // "Hello"

/** ############################################################################################################### */

// 16. toLowerCase(): Returns the calling string value converted to lower case.

console.log('toLowerCase ===> ',str4.toLowerCase()); // "hello world"

/** ############################################################################################################### */

// 17. toUpperCase(): Returns the calling string value converted to upper case.

console.log('toUpperCase ===> ',str4.toUpperCase()); // "HELLO WORLD"

/** ############################################################################################################### */

// 18. trim(): Removes whitespace from both ends of a string.
let str6 =  "  Hello World  ";
console.log('trim ===> ',str6.trim()); // "Hello World"
/** ############################################################################################################### */

// 19. trimStart(): Removes whitespace from the beginning of a string.

console.log('trimStart ===> ',str6.trimStart()); // "Hello World  "

/** ############################################################################################################### */

// 20. trimEnd(): Removes whitespace from the end of a string.

console.log('trimEnd ===> ',str6.trimEnd()); // "  Hello World"

/** ############################################################################################################### */

// 21. valueOf(): Returns the primitive value of a String object.

console.log('valueOf ===> ',str4.valueOf()); // "Hello World"
/** ############################################################################################################### */

