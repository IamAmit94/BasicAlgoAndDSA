WHAT IS A TREE?
A data structure that consists of nodes in a parent / child relationship

Lists - linear

Trees - nonlinear

TREE TERMINOLOGY
Root - The top node in a tree.
Child -A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings -A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.

KINDS OF TREES
Trees
Binary Trees
Binary Search Trees

Lots of different applications!


Where is tree used
HTML DOM
Network Routing
Abstract Syntax Tree
Artificial Intelligence
Folders in Operating Systems
Computer File Systems


HOW BSTS WORK
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent

HOW BSTS WORK
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent


# STEPS FOR INSERTING THE NODE TO A TREE 
1. Create a new node
2. Starting at the root
  2.1 Check if there is a root, if not - the root now becomes that new node!
  2.2 If there is a root, check if the value of the new node is greater than or less than the value of the root
  2.3 If it is greater 
      2.3.1 Check to see if there is a node to the right
            A. If there is, move to that node and repeat these steps
            B. If there is not, add that node as the right property
3. If it is less
   3.1 Check to see if there is a node to the left
        A. If there is, move to that node and repeat these steps
        B. If there is not, add that node as the left property


# TRAVERSING A TREE
Two ways to traverse a tree:-
 1. Breadth-first Search
 2. Depth-first Search
    A. DFS (In-Order)
    B. DFS (Pre-Order)
    c. DFS (Post-Order)


 BFS

              10
        6           15
      3   8            20

[10,6,15,3,8,20] // searching order in BFS


DFS (In-Order)

              10
        6           15
      3   8            20

[3,6,8,10,15,20] // Searching order in DFS(In-Order);

DFS (Pre-Order)
              10
        6           15
      3   8            20
    
[10,6,3,8,15,20]  // Searching order in DFS(Pre-Order)

DFS (Post-Order)
              10
        6           15
      3   8            20

[3,8,6,20,15,10] // Searching order in DFS(Post-Order)


# Steps to perform the BFS

1. Create a queue (this can be an array) and a variable to store the values of nodes visited
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
    3.1 Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    3.2 If there is a left property on the node dequeued - add it to the queue
    3.3 If there is a right property on the node dequeued - add it to the queue
4. Return the variable that stores the values


# Steps to Perform the DFS(PRE-ORDER)
            `Steps - Recursively`
1. Create a variable to store the values of nodes visited
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node
      3.1 Push the value of the node to the variable that stores the values
      3.2 If the node has a left property, call the helper function with the left property on the node
      3.3 If the node has a right property, call the helper function with the right property on the node
4. Invoke the helper function with the current variable
5. Return the array of values

# Steps to Perform the DFS(POST-ORDER)
      `Steps - Recursively`
1. Create a variable to store the values of nodes visited
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node
            3.1 If the node has a left property, call the helper function with the left property on the node
            3.2 If the node has a right property, call the helper function with the right property on the node
            3.3 Push the value of the node to the variable that stores the values
            3.4 Invoke the helper function with the current variable
4. Return the array of values

# Steps to Perform the DFS(IN-ORDER)
            `Steps - Recursively`
1. Create a variable to store the values of nodes visited
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node
      3.1 If the node has a left property, call the helper function with the left property on the node
      3.2 Push the value of the node to the variable that stores the values
      3.3 If the node has a right property, call the helper function with the right property on the node
4. Invoke the helper function with the current variable
5. Return the array of values



# BINARY HEAP

## What is Binary HEAP ?
Very similar to a binary search tree, but with some different rules!
In a `MaxBinaryHeap`, parent nodes are always larger than child nodes. 
In a `MinBinaryHeap`, parent nodes are always smaller than child nodes


# MAX BINARY HEAP
1. Each parent has at most two child nodes
2. The value of each parent node is always greater than its child nodes
3. In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
4. A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

Tree representaion
            100
      19           36
   17     3     25     1
2      7

Array representation of tree
[100,19,36,17,3,25,1,2,7]


# MIN BINARY HEAP

            1
      2            3
   17    19    36      7
25  100   

`Why do we need to know this?`
Binary Heaps are used to implement `Priority Queues`, which are very commonly used data structures
They are also used quite a bit, with `graph traversal algorithms`

# INSERT PSEUDOCODE
1. Push the value into the values property on the heap
2. Bubble the value up to its correct spot!

# INSERT PSEUDOCODE
1. Push the value into the values property on the heap
2. Bubble Up:
      2.1. Create a variable called index which is the length of the values property - 1
      2.2. Create a variable called parentIndex which is the floor of (index-1)/2
      2.3. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            A. Swap the value of the values element at the parentIndex with the value of the element property at the child index
            B. Set the index to be the parentIndex, and start over!


# SINK DOWN
The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as `bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max`).


# REMOVING
1. Swap the first value in the values property with the last one
2. Pop from the values property, so you can return the value at the end.
3. Have the new root "sink down" to the correct spot...​
      3.1. Your parent index starts at 0 (the root)
      3.2. Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
      3.3.Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
      3.4. If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
      3.5. The child index you swapped to now becomes the new parent index.  
      3.6. Keep looping and swapping until neither child is larger than the element.
      3.7. Return the old root!


# WHAT IS A PRIORITY QUEUE?

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

# OUR PRIORITY QUEUE

1. Write a Min Binary Heap - lower number means higher priority.
2. Each Node has a val and a priority.  Use the priority to build the heap.
3. `Enqueue` method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
4. `Dequeue` method removes root element, returns it, and rearranges heap using priority.


# Heapsort

We can sort an array in O(n log n) time and O(1) space by making it a heap!

Make the array a max heap (use maxHeapify)
Loop over the array, swap the root node with last item in the array
After swapping each item, run maxHeapify again to find the next root node
Next loop you'll swap the root node with the second-to-last item in the array and run maxHeapify again.
Once you've run out of items to swap, you have a sorted array! 

# Big O of Binary Heaps
Insertion -   O(log N)
Removal -   O(log N)
Search -   O(N)