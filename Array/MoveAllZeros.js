let arr = [1, 32, 0, 23, 0]
console.log(arr.filter(a => a == 0).concat(arr.filter(a => a !== 0)));

let tempArr = []
arr.forEach(element => {
    if (element === 0) {
        tempArr.push(element)
    }
});
arr.forEach(element => {
    if (element !== 0) {
        tempArr.push(element)
    }
});
arr = [...tempArr]
console.log(arr)