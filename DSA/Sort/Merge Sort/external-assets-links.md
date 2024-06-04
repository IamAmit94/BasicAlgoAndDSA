
084 Slides
https://cs.slides.com/colt_steele/intermediate-sorting-algorithms

085 Visualgo-Sorting-click-the-merge-tab-
https://visualgo.net/en/sorting

090 Big-O-Cheat-Sheet
http://bigocheatsheet.com/



# MERGE SORT

1. It's a combination of two things - merging and sorting!
2. Exploits the fact that arrays of 0 or 1 element are always sorted
3. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

         # MERGING ARRAY
    1. In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
    2. Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the
    two input arrays
    3. This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

           # MERGING ARRAY PSEUDO CODE

            1. Create an empty array, take a look at the smallest values in each input array
            2. While there are still values we haven't looked at...
               2.1 If the value in the first array is smaller than the value in the second array, push the value in the first array into our results
                   and move on to the next value in the first array
               2.2 If the value in the first array is larger than the value in the second array, push the value in the second array into our results
                   and move on to the next value in the second array
               2.3 Once we exhaust one array, push in all remaining values from the other array