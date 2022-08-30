function merge(left, right){
    console.log("MERGING: " + left + " WITH " + right);
    let merge = [];
    while (left.length && right.length){
        if (left[0] < right[0]){
            merge.push(left.shift());
        }
        else{
            merge.push(right.shift());
        }
    }
    return[...merge, ...left, ...right];
}

function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    console.log("splitting: " + arr);
    let mid = Math.floor(arr.length / 2);
    console.log("midpoint: " + mid);
    let left = arr.splice(0, mid);
    return merge(mergeSort(left), mergeSort(arr));
}

console.log("FINAL: " + mergeSort([2, 4, 6, 10, 8, 12]));
console.log("FINAL: " + mergeSort([12, 15, 7, 4, 10, 8, 12]));