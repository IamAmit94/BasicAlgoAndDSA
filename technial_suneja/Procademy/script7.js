/****************************************************************
 * ES6 ENHANCEMENTS IN OBJECT LITERAL SYNTAX
 ****************************************************************/
/*let workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

let shift = {
    [workingDays[0]]: '10AM - 7PM',
    [workingDays[1]]: '10AM - 7PM',
    [workingDays[2]]: '10AM - 7PM',
    [10 + 20]: '10AM - 7PM',
    Fri: '10AM - 7PM',
}

//1. VARIABLES ARE ASSIGNED IMPLICITELY TO THE PROPERTIED WITH SAME NAME
//IF WE ARE NOT ASSIGNING ANY VALUE TO THAT PROPERT EXPLICITELY

//2. ENHANCEMENT IN THE WAY WE CREATE METHODS FOR AN OBJECT

//3. JAVASCRIPT EXPRESSIONS CAN BE USED AS A PROPERTY FOR AN OBJECT
let employee = {
    id: 101,
    name: 'John',
    birthYear: 1990,
    workingDays,
    shift,

    calculateAge(){
        let age = 2021 - this.birthYear;
        console.log(age);
    }
}
console.log(employee);
employee.calculateAge();
*/