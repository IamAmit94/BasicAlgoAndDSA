# MAP in javscript

Before ES6, we often used an object to emulate a map by mapping a key to a value of any type. But using an object as a map has some side effects:

1. An object always has a default key like the `prototype`.
2. A key of an object must be a `string` or a `symbol`, "you cannot use an object as a key".
3. An object does not have a property that represents the `size of the map`.

==> A Map object holds key-value pairs. Keys are unique in a Map’s collection. In other words, a key in a Map object only appears once.

~ Keys and values of a Map can be any values.
~ When iterating a Map object, each iteration returns a 2-member array of [key, value].


##  To create a new Map, you use the following syntax:

`let map = new Map([iterable]);`

The Map() accepts an optional iterable object whose elements are key-value pairs.


########################################      Useful JavaScript Map methods   #########################################################
#                                                                                                                                     #
#                                                                                                                                     #
#######################################################################################################################################


~ `clear()` – removes all elements from the map object.

~ `delete(key)` – removes an element specified by the key. It returns if the element is in the map, or false if it does not.

~ `entries()` – returns a new Iterator object that contains an array of [key, value] for each element in the map object. The order of objects in the map is the same as the insertion order.

~ `forEach(callback[, thisArg])` – invokes a callback for each key-value pair in the map in the insertion order. The optional `thisArg` parameter sets the this value for each callback.

~ `get(key)` – returns the value associated with the key. If the key does not exist, it returns undefined.

~ `has(key)` – returns true if a value associated with the key exists or false otherwise.

~ `keys()` – returns a new Iterator that contains the keys for elements in insertion order.

~ `set(key, value)` – sets the value for the key in the map object. `It returns the map object itself therefore you can chain this method with other methods.`

~ `values()` returns a new iterator object that contains values for each element in insertion order.