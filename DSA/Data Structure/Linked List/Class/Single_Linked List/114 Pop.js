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
    pop(){
        if(!this.head) return undefined; // If the list is empty, return undefined
        var current = this.head; // set the curent and new tail to be at start
        var newTail = current;
        while(current.next){  // Traverse the list to find the last and second-to-last nodes
            newTail = current;
            current = current.next;
        }
        this.tail = newTail; // moving the tail forward
        this.tail.next = null; // setting the next node to be null
        this.length--; // decrement the length
        if(this.length === 0){ // for the case when 1 empty item is left
            this.head = null;
            this.tail = null;
        }
        return current;

    }
}


var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")
list.pop()
console.log('list pop==', list);


/** THINGS TO REMEMBER WHILE POPING THE LINKED LIST
 *
1. If there are no nodes in the list, return undefined
2. Loop through the list until you reach the tail
3. Set the next property of the 2nd to last node to be null
4. Set the tail to be the 2nd to last node
5. Decrement the length of the list by 1
6. Return the value of the node removed
 */