let arr = [1, 22, 3, 4, 5, 6, 8, 9];
function arraySort() {
    return arr.sort((a, b) => { return a - b })
}
console.log(arraySort());