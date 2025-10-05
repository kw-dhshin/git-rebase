function sortArray(arr, order = "asc") {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            const condition = order === "asc"
            ? arr[j] > arr[j + 1]
            : arr[j] < arr[j + 1];
            if (condition) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


let arr1 = [3, 6, 1, 4, 9, 7, 2, 5, 10, 8];
sortArray(arr1, "asc");
console.log("Ascending:", arr1);

let arr2 = [3, 6, 1, 4, 9, 7, 2, 5, 10, 8];
sortArray(arr2, "desc");
console.log("Descending:", arr2);