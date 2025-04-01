let arr = [1, 2, 3, 4]
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i]//1
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    //  [4, 2, 3, 1]
    //  [4, 3, 2, 1]

}

console.log(arr)