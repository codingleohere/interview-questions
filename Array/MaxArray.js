let arr = [8, 2, 39, 4, 5]
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(Math.max(...arr))
console.log(max)

arr.sort((a, b) => {
    return b - a;
});

max = arr[0];
console.log(max);