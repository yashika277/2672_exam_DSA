function binarySearch(arr, l, r, ele) {
    if (l > r) {
        return -1;
    }
    let mid = parseInt((l + r) / 2)

    if (arr[mid] == ele) {
        return mid;
    }

    if (arr[mid] > ele) {
        return binarySearch(arr, l, mid - 1, ele);
    } else {
        return binarySearch(arr, mid + 1, r, ele);
    }
}

const arr = [2,5,1,8,7,6,9,10];
let ele = 9;
let l = 0;
let n = arr.length - 1;
let result = binarySearch(arr, l, n, ele);
console.log(arr);
if (result == -1) {
    console.log("Element is not in array ");
}
else {
    console.log("Element is index " + result);
}
