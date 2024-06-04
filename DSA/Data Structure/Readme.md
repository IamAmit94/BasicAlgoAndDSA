# Data Structures


BST
Queues
Single linked list
Undirected unweighted graphs
binary heaps
Directed Graphs
Hash Tables
Doubly linked list
Stacks

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

Different data structures excel at different things.  Some are highly specialized, while others (like arrays) are more generally used.

Example where the DS is used
GRAPHS: Working with map/location data ?
LINKED LIST: Need an ordered list with fast inserts/removals at the beginning and end
TREES: Web scraping nested HTML
BINARY HEAP: Need to write a scheduler



# CLASSES
A blueprint for creating objects with pre-defined properties and methods.


The Syntax
1. The method to create new objects must be called `constructor`

2. The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!


`class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}`

## creating the object from the class

we use the `new` keyword

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");


# INSTANCE METHOD

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName() // "Colt Steele"

# CLASS METHOD OR STATIC METHOD

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    
    static enrollStudents(...students){
        // maybe send an email here
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])


# How the class and Instance method will be used in the code
class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}


# This keyword

Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance)


RECAP

1. Classes are `blueprints` that when created make objects known as instances
2. Classes are created with the `new` keyword
3. The `constructor` function is a special function that gets run when the class is instantiated
4. `Instance` methods can be added to classes similar to methods in objects
5. Class methods can be added using the `static` keyword