# HASH TABLE

## OBJECTIVE
1. Explain what a hash table is
2. Define what a hashing algorithm
3. Discuss what makes a good hashing algorithm
4. Understand how collisions occur in a hash table
5. Handle collisions using separate chaining or linear probing

# WHAT IS A HASH TABLE?
Hash tables are used to store key-value pairs.
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are fast for all of the following operations:-
finding values, adding new values, and removing values!

# WHY SHOULD WE USE HASH TABLES ?
Nearly every programming language has some sort of hash table data structure
Because of their speed, hash tables are very commonly used!

ex  Python has Dictionaries
    JS has Objects and Maps*
    Java, Go, & Scala have Maps
    Ruby has...Hashes


   ` Imagine we want to store some colors`
    We could just use an array/list:
    [ "#ff69b4","#ff4500","#00ffff" ] 
    Not super readable!  What do these colors correspond to?

It would be nice if instead of using indices to access the colors, we could use more human-readable keys.

orangered ==> #ff4500
pink     ===> #ff69b4
cyan     ===> #00ffff

colors["cyan"]is way better than colors[2]

To implement a hash table, we'll be using an array.
In order to look up values by key, we need a way to `convert keys into valid array indices`.
A function that performs this task is called a `hash function`.

# WHAT MAKES A GOOD HASH ?
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)


The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a prime length.

You don't need to know why. (Math is complicated!) But here are some links if you're curious.


# Dealing with Collisions
Even with a large array and a great hash function, collisions are inevitable. 
There are many strategies for dealing with collisions, but we'll focus on two:
1. Separate Chaining
2. Linear Probing


## Separate Chaining
With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index.

## Linear Probing
With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.


# HASH TABLE CLASS

## SET/GET
`set`
1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

`get`
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined

`keys`: Loops through the hash table array and returns an array of keys in the table
`values`: Loops through the hash table array and returns an array of values in the table


BIG O of HASH TABLES (AVG CASE)
Insert: O(1)
Deletion: O(1)
Access: O(1)


# RECAP
1. Hash tables are collections of key-value pairs
2. Hash tables can find values quickly given a key
3. Hash tables can add new key-values quickly
4. Hash tables store data in a large array, and work by hashing the keys
5. A good hash should be fast, distribute keys uniformly, and be deterministic
6. Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
7. When in doubt, use a hash table!