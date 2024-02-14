/*****************************************************************
 *
 *
 *                FOR OF LOOP
 *
 *
 *
 *****************************************************************/

let students = ['John', 'Merry', 'Steve', 'Mark', 'Sarah', 'Mike'];

let str = 'Hello from JavaScript';

//SYNTAX OF FOR...OF LOOP
/*for(variable of itterable){

}*/
//LOOP OVER AN ARRAY USING FOR...OF
for(let item of students){
    console.log('Student name: ' + item);
}

console.log('-------------------------------')

//LOOP OVER AN ARRAY USING FOR LOOP
for(let i = 0; i < students.length; i++){
    console.log('Student name: ' + students[i]);
}

//LOOPING OVER A STRING USING FOR...OF LOOP
for(let s of str){
    console.log(s);
}

// write a funx in js to count the length of string without using the length

let countStr = 'Welcome to the js'

function countString (countStr) {
    let count = 0;
    for(let s of countStr) {
        count++;
    }
    return count;
}


const result = countString(countStr);
console.log(result,'===count')