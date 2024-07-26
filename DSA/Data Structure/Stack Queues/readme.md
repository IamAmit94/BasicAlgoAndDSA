# Stack and Queue


## Stack
A LIFO data structure!

The last element added to the stack will be the first element removed from the stack

ex. Think about a stack of plates, or a stack of markers, or a stack of....anything.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

## Where stack are use ?
Managing function invocations
Undo / Redo
Routing (the history object) is treated like a stack!


Implementation of Stack:-
1. Array Implementation
2. Linked List Implementation


Operations on Stack:-
1. Push:  Add a value to the top of the stack!
2. Pop:  Remove a value from the top of the stack


## PUSHING PSEUDOCODE
1. The function should accept a value
2. Create a new node with that value
3. If there are no nodes in the stack, set the first and last property to be the newly created node 
4. If there is at least one node, create a variable that stores the current first property on the stack
5. Reset the first property to be the newly created node
6. Set the next property on the node to be the previously created variable
7. Increment the size of the stack by 1


# POP PSEUDOCODE
1. If there are no nodes in the stack, return null
2. Create a temporary variable to store the first property on the stack
3. If there is only 1 node, set the first and last property to be null
4. If there is more than one node, set the first property to be the next property on the current first
5. Decrement the size by 1
6. Return the value of the node removed


``BIG O of STACKS``
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(N)

## RECAP
Stacks are a LIFO data structure where the last value in is always the first one out.
Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
They are not a built in data structure in JavaScript, but are relatively simple to implement
Insert and remove are both O(1)





## QUEUE

A FIFO data structure!
First In First Out


Queues exist everywhere! Think about the last time you waited in line....
Background tasks
Uploading resources
Printing / Task processing



## ENQUEUE
Adding to the beginning of the Queue!
Remember, queues are a FIFO data structure

# ENQUEUE PSEUDOCODE
1. This function accepts some value
2. Create a new node using that value passed to the function
3. If there are no nodes in the queue, set this node to be the first and last property of the queue
4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
5. Increment the size of the queue by 1

# DEQUEUE 
Removing from the beginning of the Queue!

Remember, queues are a FIFO data structure

## DEQUEUE PSEUDOCODE
1. If there is no first property, just return null
2. Store the first property in a variable
3. See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
4. If there is more than 1 node, set the first property to be the next property of first 
5. Decrement the size by 1
6. Return the value of the node dequeued



BIG O of QUEUES
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(N)