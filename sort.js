function sortArray(arr, removeDuplicates = false) {
    if (removeDuplicates) {
        arr = [...new Set(arr)];
    }

    let swapped;

    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}


let arr1 = [3, 6, 1, 4, 9, 7, 2, 5, 10, 8, 3, 6];
console.log("Original:", arr1);

let sorted1 = sortArray(arr1);
console.log("Sorted (no removal):", sorted1);

let sorted2 = sortArray(arr1, true);
console.log("Sorted (duplicates removed):", sorted2);