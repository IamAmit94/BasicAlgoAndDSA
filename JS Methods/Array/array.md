01. push(element1, ..., elementN): Adds one or more elements to the end of an array.

02. pop(): Removes the last element from an array and returns that element.

03. shift(): Removes the first element from an array and returns that element.

04. unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array.

05. concat(array2, ..., arrayN): Combines two or more arrays.

06. splice(start, deleteCount, item1, ..., itemN): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

07. slice(start, end): Returns a shallow copy of a portion of an array.

08. indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

09. lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

10. includes(element, fromIndex): Determines whether an array includes a certain element, returning true or false as appropriate.

11. filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.

12. map(callback): Creates a new array populated with the results of calling a provided function on every element in the array.

13. forEach(callback): Executes a provided function once for each array element.

14. reduce(callback, initialValue): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

15. reduceRight(callback, initialValue): Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.

16. every(callback): Tests whether all elements in the array pass the test implemented by the provided function.

17. some(callback): Tests whether at least one element in the array passes the test implemented by the provided function.

18. find(callback): Returns the first element in the array that satisfies the provided testing function.

19. findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function.

20. reverse(): Reverses the elements of an array in place.

21. sort(compareFunction): Sorts the elements of an array in place.

22. join(separator): Joins all elements of an array into a string.

23. toString(): Returns a string representing the array.

24. isArray(obj): Returns true if the object is an array, and false otherwise
*******************

25. copyWithin:  method is used to copy a sequence of array elements within the array. It overwrites the existing values and modifies the array in place. The copyWithin() method has the following syntax:

26. entries(): method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

27. fill(): method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

28. findLast(): method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

29. findLastIndex(): method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

30. flat(): method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

31. flatMap(): method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

32. from():  static method creates a new, shallow-copied Array instance from an iterable or array-like object.

33. fromAsync(): static method creates a new, shallow-copied Array instance from an async iterable, iterable, or array-like object.

34. keys(); The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

35. of():The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

36. toLocalString(): method of Array instances returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ",").

37. toReversed():  method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.

38. toSorted(): method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.

39. toSpliced(): method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.

40. values(): method of Array instances returns a new array iterator object that iterates the value of each item in the array.

41. with(): method of Array instances is the copying version of using the bracket notation to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.