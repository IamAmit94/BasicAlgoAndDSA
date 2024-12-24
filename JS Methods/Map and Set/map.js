//? MAP in javascript


// ! 1. Map in JavaScript  ( Creating a Map )
// A Map is a collection of key-value pairs where both keys and values can be any data type, including objects and functions. It allows us to store data in a more efficient manner compared to plain objects, especially when we need to use complex data types as keys.


let map = new Map();

// ########################################################################################################################################################################################## 

// ! 2. ADDING ELEMENTS

// map.set(KEY,VALUE);  syntax


map.set('name', 'John');
map.set('age', 30);
map.set('job', 'developer');

console.log('Adding Element ==> ',map);

// ########################################################################################################################################################################################## 

// ! 3. ACCESSING VALUES

console.log('Fetching Element => ',map.get('name')); // Output: John
console.log(map.get('age'));  // Output: 30



// ########################################################################################################################################################################################## 


// ! 4. CHECKING FOR THE KEY

console.log('MAP has property : => ',map.has('name'));  // Output: true
console.log(map.has('address'));  // Output: false


// ########################################################################################################################################################################################## 


// ! 5. REMOVING ELEMENT
console.log('Map before DELETE ====>',map)
map.delete('age');
console.log('Map AFTER DELETE ====>',map)
console.log('DELETE in map ==== >',map.has('age'));  // Output: false

// ########################################################################################################################################################################################## 


// ! 6. CLEARING ALL ELEMENT

// map.clear();
console.log('clear all data in map : => ',map.size);  // Output: 0


// ########################################################################################################################################################################################## 


// ! 7. ITERATION OVER MAP

// Using forEach():
console.log('FOREACH in MAP =====> ')
map.forEach((value, key) => {
    console.log(key + ': ' + value);
  });
  
// Using forOf loop

console.log('For OF LOOP ====');

for (let [key, value] of map) {
    console.log(key + ': ' + value);
  }


  for (let [key] of map) {
    console.log(`keys in  forOf  `,key);
  }

  console.log(`\n\n\n\n\n\n`)
  for (let [key, value] of map) {
    console.log(`value in forOf  `,value);
  }
  
// ########################################################################################################################################################################################## 

// ########################################################################################################################################################################################## 

