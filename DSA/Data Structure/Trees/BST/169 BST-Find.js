class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value); // create the new Node
        if(this.root === null) { // check if the root exist or not
            this.root = newNode;
            return this;
        }
        let current  = this.root; // update the root
        while(true) {
            if(value === current.value)  return undefined; // check if the value that was inserted was present already or not
    
            if(value < current.value) { // check if the value is smaller
                if(current.left === null) { // check if your left is empty or not
                    current.left = newNode; 
                    return this;
                }
                current = current.left // update the left
            } else {      // If the value is greater
                if(current.right === null) { // check if the right is empty or not
                    current.right = newNode;
                    return this;
    
                }
                current = current.right; // update the right
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)


console.log(tree.find(7))

// contains will return true or false
// find will return the node

/**Finding a Node in a BST
Steps - Iteratively or Recursively

1. Starting at the root
    1.1 Check if there is a root, if not - we're done searching!
    1.2 If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    1.3 If not, check to see if the value is greater than or less than the value of the root
    1.4 If it is greater 
        1.4.1 Check to see if there is a node to the right
            A. If there is, move to that node and repeat these steps
            B. If there is not, we're done searching!
2. If it is less
    2.1 Check to see if there is a node to the left
        A. If there is, move to that node and repeat these steps
        B. If there is not, we're done searching!

*/