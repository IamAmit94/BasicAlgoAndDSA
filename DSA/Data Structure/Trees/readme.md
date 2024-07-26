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