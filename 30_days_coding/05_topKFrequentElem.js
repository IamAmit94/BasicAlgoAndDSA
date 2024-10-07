// complex as Include the hash table and bucket sort technique inorder to resolve the problem


function topKFreqElem(nums, k) {
    if (!nums.length) return 'Empty Array';
    if (k === 1) return [...new Set(nums)]; // Return unique elements if k == 1

    // Step 1: Frequency Map (O(n))
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Build a Min-Heap of size k (O(n log k))
    const minHeap = [];
    for (let [num, freq] of freqMap.entries()) {
        minHeap.push({ num, freq });
        minHeap.sort((a, b) => a.freq - b.freq);
        if (minHeap.length > k) {
            minHeap.shift(); // Remove the element with the smallest frequency
        }
    }

    console.log('minHeap=====',minHeap)

    // Step 3: Extracting Results (O(k log k))
    const result = [];
    while (minHeap.length) {
        result.push(minHeap.shift().num);
    }

    return result.reverse(); // Optional: Reverse to return from most to least frequent
}

// Example usage
console.log(topKFreqElem([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFreqElem([1], 1));               // Output: [1]
