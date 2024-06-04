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