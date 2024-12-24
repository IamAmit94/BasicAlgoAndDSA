 
// Map and Set in JavaScript
// In JavaScript, Map and Set are two built-in data structures that are part of the ES6 (ECMAScript 2015) specification. They are both used to store collections of data, but they have distinct behaviors and use cases.


/**
########################################### ! OPERATION IN SET #############################################
#                                                                                                          #
#                                                                                                          #
#                                                                                                          #
#                                                                                                          #
############################################################################################################

*/ 


// ! 1. CREATING THE SET

//You can create a new Set using the Set constructor.

const mySet = new Set();

// Or we can also initialize the Set with an array or iterable object

const mySet1 = new Set([1,2,3,4]);

//####################################################################################################################################################

// ! 2. ADDING ELEMENT TO SET

//Use the add() method to add elements to a set. It will only add the element if it's not already present. 

mySet1.add(5);
console.log('Adding Element to Set : ',mySet1);


mySet1.add(2); // It won't be adding 2 as it is already present in it

console.log('Adding element to SET:  ',mySet1);

//####################################################################################################################################################

// ! 3. CHECKING IF SET CONTAINS AN ELEMENT

// Use the has() method to check if a Set contains a specific value. It returns true if the value is in the set, and false otherwise.

console.log('Check if set has element:  => ',mySet1.has(4));
console.log('Check if set has element:  => ',mySet.has(4));


//####################################################################################################################################################


// ! 4. REMOVING ELEMENT FROM SET

// Use the delete() method to remove a specific element from a Set. It returns true if the element was removed, and false if it was not found.

mySet1.delete(3);  // Removes 3 from the Set
console.log('MySet1 ====>',mySet1)
console.log('Remove element  3 => ',mySet1.has(3));  // false


//####################################################################################################################################################


// ! 5. CLEARING ALL ELEMENT FROM SET

// The clear() method removes all elements from the Set.

// mySet1.clear();  // Removes all elements from the Set

// SIZE to check the number of element in set
console.log('Clear all element from SET  => ',mySet1.size);  // 0


//####################################################################################################################################################



// ! 6. Iterating over a Set

/**
You can iterate over the elements of a Set using:

for...of loop
forEach() method

 */


// Using for...of
for (let item of mySet1) {
    console.log('For of loop === ',item);
}

// Using forEach() method
mySet1.forEach((value) => {
    console.log('ForEach in set ===',value);
});


//####################################################################################################################################################

// ! 8. CONVERTING THE SET TO AN ARRAY

// You can convert a Set to an array using the Array.from() method or the spread operator (...).

const array = Array.from(mySet1);

const array2 = [...mySet1];

console.log('Array.From ===> ',array);
console.log('Spread operator ===> ',array);


//####################################################################################################################################################

// ! 9. UNION IN SETS

//You can create a union of two Sets by iterating over one Set and adding its elements to another.


const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log('union ===> ',union);  // Set {1, 2, 3, 4, 5}

//####################################################################################################################################################


// ! 10. INTERSECTION IN SET

//You can create an intersection of two Sets by filtering elements that exist in both Sets.


const intersection = new Set([...setA].filter(x => setB.has(x)))
console.log('intersection ------',intersection);  // Set {3}

//####################################################################################################################################################


// ! 11. DIFFERENCE IN SET

//You can create a difference of two Sets by filtering elements that exist in one Set but not the other.


const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(' Diffrence in SET ----- >',difference);  // Set {1, 2}



//####################################################################################################################################################

// ! 12.Symmetric Difference of Sets

// A symmetric difference is the set of elements that are in either of the sets but not in both.

const symmetricDifference = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
]);
console.log(symmetricDifference);  // Set {1, 2, 4, 5}


//####################################################################################################################################################

//####################################################################################################################################################

//####################################################################################################################################################

const setMethods = [
    { Method: "add(value)", Description: "Adds a value to the set. If the value is already present, it does nothing." },
    { Method: "delete(value)", Description: "Removes a value from the set. Returns true if the element was removed, false otherwise." },
    { Method: "has(value)", Description: "Checks if the set contains a specific value. Returns true or false." },
    { Method: "clear()", Description: "Removes all elements from the set." },
    { Method: "size", Description: "Returns the number of elements in the set." },
    { Method: "forEach(callback)", Description: "Executes a function for each element in the set." },
    { Method: "values()", Description: "Returns an iterator object that contains the values of the set." },
    { Method: "keys()", Description: "Same as values(), returns an iterator for the values." },
    { Method: "entries()", Description: "Returns an iterator object for each key-value pair in the set (key and value are the same)." }
  ];
  

  console.log(`\n\n Summary of Important Methods and Properties`)
  console.table(setMethods);
  


console.log(`\n\n Key Differences Between Set and Array : => `);

const comparisonData = [
    { Feature: "Uniqueness", Set: "A Set only stores unique values. Duplicate values are automatically removed.", Array: "An Array can contain duplicate values." },
    { Feature: "Ordering", Set: "A Set stores values in insertion order, but you cannot access elements by index.", Array: "An Array stores values in insertion order and allows access by index." },
    { Feature: "Access", Set: "You cannot access elements by index. Set is designed for fast lookups.", Array: "You can access elements by index (e.g., arr[0])." },
    { Feature: "Iteration", Set: "A Set can be iterated using methods like forEach(), or with for...of loops.", Array: "Arrays can be iterated using forEach(), for...of, or traditional for loops." },
    { Feature: "Size", Set: "The size of a Set is determined using the size property.", Array: "The size of an Array is determined using the length property." },
    { Feature: "Methods for Modifying", Set: "add(), delete(), clear()", Array: "push(), pop(), shift(), unshift(), splice(), etc." },
    { Feature: "Performance", Set: "Set operations (such as has(), add(), and delete()) are generally faster for large datasets, as it avoids duplicates and allows efficient lookups.", 
                                             Array: "Arrays have slower performance for operations like searching for an element (indexOf()) because they allow duplicates and have to search the entire array." },
    { Feature: "Type of Data", Set: "A Set only stores unique values of any type, but they don't store data by index.", Array: "An Array can store any type of data, including mixed data types, and allows for easy manipulation of elements using indices." }
  ];
  
  console.table(comparisonData);
  
  