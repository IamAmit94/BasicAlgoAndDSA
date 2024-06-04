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
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Welcome")
console.log(list)

//https://medium.com/swlh/singly-linked-list-in-javascript-a0e58d045561

// Linked List, like arrays, is a linear data structure. It contains head, tail and length properties. As shown
//below, each element in linked list is a node, which has a value and a reference to next node, or if it’s 
//tail, points to null.