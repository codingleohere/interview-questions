let arr = ["A", "B", "C", "C", "D", "E"];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        console.log("s")
        if (arr[i] === arr[j]) {
            arr.splice(i, 1)
        }
    }
}
console.log(arr)