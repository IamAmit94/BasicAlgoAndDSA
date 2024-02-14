/****************************************************************
 * HOW TO LOOP OVER OBJECTS IN JAVASCRIPT
 ****************************************************************/
// When we want to loop over an object, we have diffrent options deepening
//upon what we want to loop over. We can loop over:-
// Objects Property NAME
// Objects Property VALUE
// Both on objects property and value

let user = {
    name: 'John',
    age: 20,
    occupation: 'Teacher',
    gender: 'Male'
}

//LOOPING OVER OBJECT PROPERTY NAMES
//KEYS METHOD WILL RETURN AN ARRAY
//THAT ARRAY WILL CONTAIN ALL THE PROPERTIES OF PASSED OBJECT AS ITS ELEMENT
let properties = Object.keys(user);
console.log(properties);
console.log(properties.length);
/*
for(let prop of properties){
    console.log(prop);
}

//LOOPING OVER OBJECT'S PROPERTY VALUES
//VALUES METHOD RETURNS AN ARRAY
//THAT ARRAY WILL CONTAIN ALL THE PROPERTIES VALUES OF PASSED OBJECT AS ITS ELEMENT
let value = Object.values(user);
console.log(value);

for(let val of value){
    console.log(val);
}

//LOOPING OVER BOTH PROPERTY NAME & PROPERTY VALUE


let entries = Object.entries(user);
console.log(entries);
for(let entry of entries) {
    console.log(`${entry[0]: ${entry[1]}})
}

for(let [key, val] of entries){
    console.log(`${key}: ${val}`);
}
*/