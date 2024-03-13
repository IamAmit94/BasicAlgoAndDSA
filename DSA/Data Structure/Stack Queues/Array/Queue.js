class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue: Add element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue: Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Front: Return the front element without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // IsEmpty: Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Size: Return the number of elements in the queue
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.front()); // Output: 1
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.size()); // Output: 2
  console.log(queue.isEmpty()); // Output: false

  