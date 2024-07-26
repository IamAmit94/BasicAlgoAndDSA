const findExtreme = (arr, phrase) => {
    if (arr.length === 0) {
        throw new Error("Array is empty!");
    }

    let min = arr[0];
    let max = arr[0];
    let secondMin = Infinity;
    let secondMax = -Infinity;

    // Find the min and max
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }

        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    switch (phrase) {
        case "min":
            return min;
        case "max":
            return max;
        case "secondMin":
            return secondMin === Infinity ? null : secondMin;
        case "secondMax":
            return secondMax === -Infinity ? null : secondMax;
        default:
            throw new Error("Invalid phrase! Use 'min', 'max', 'secondMin', or 'secondMax'.");
    }
};

const arr = [5, 2, 9, 1, 7];

console.log(`Min: ${findExtreme(arr, "min")}`); // 1
console.log(`Max: ${findExtreme(arr, "max")}`); // 9
console.log(`Second Min: ${findExtreme(arr, "secondMin")}`); // 2
console.log(`Second Max: ${findExtreme(arr, "secondMax")}`); // 7
