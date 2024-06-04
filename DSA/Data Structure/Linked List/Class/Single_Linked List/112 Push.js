class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){// if there is no head then set the head and tail to be the newly created node
            this.head = newNode;
            this.tail = this.head;
        } else { // else set the next node to be the newly created node
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length++; // icrement the length in order to check the number of insertion.
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("Welcome")
list.push("LL")
list.push("push")


console.log('Linked list push ==', list);
//https://medium.com/swlh/singly-linked-list-in-javascript-a0e58d045561


// Pushing pseudocode

// 1. This function should accept a value
// 2. Create a new node using the value passed to the function
// 3. If there is no head property on the list, set the head and tail to be the newly created node
// 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// 5. Increment the length by one
// 6. Return the linked list