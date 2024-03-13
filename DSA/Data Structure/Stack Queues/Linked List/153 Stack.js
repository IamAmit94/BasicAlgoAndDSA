class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


/**
// WHAT IS A STACK?
// A LIFO data structure!

// The last element added to the stack will be the first element removed from the stack

WHERE STACKS ARE USED

1. Managing function invocations
2. Undo / Redo
3. Routing (the history object) is treated like a stack!


PUSHING PSEUDOCODE

1. The function should accept a value
2. Create a new node with that value
3. If there are no nodes in the stack, set the first and last property to be the newly created node 
4. If there is at least one node, create a variable that stores the current first property on the stack
5. Reset the first property to be the newly created node
6. Set the next property on the node to be the previously created variable
7. Increment the size of the stack by 1


POP
Remove a value from the top of the stack

POP PSEUDOCODE

1. If there are no nodes in the stack, return null
2. Create a temporary variable to store the first property on the stack
3. If there is only 1 node, set the first and last property to be null
4. If there is more than one node, set the first property to be the next property on the current first
5. Decrement the size by 1
6. Return the value of the node removed


BIG O of STACKS
Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(N)

CONCLUSION:

Stacks are a LIFO data structure where the last value in is always the first one out.
Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
They are not a built in data structure in JavaScript, but are relatively simple to implement
Insert and remove are both O(1)
 */