function sortArray(arr) {
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


let arr = [3, 6, 1, 4, 9, 7, 2, 5, 10, 8];
sortArray(arr);
console.log(arr);