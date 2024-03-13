class Stack {
    constructor() {
        this.items = [];
    }

    // Push method to add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Pop method to remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek method to return the top element without removing it
    peek() {
        return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }

    // isEmpty method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size method to get the number of elements in the stack
    size() {
        return this.items.length;
    }

    // print method to display the elements of the stack
    print() {
        return this.items.join(" ");
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.print()); // Output: 10 20 30
console.log("Top element:", stack.peek()); // Output: Top element: 30

stack.pop();
console.log(stack.print()); // Output: 10 20
console.log("Is the stack empty?", stack.isEmpty()); // Output: Is the stack empty? false
console.log("Stack size:", stack.size()); // Output: Stack size: 2
