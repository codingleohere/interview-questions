let arr = [0, 1, 2, 3]
// let arr2 = [8, 7, 6, 199]
let n = Math.max(...arr)
let expectedSum = (n * (n + 1)) / 2
let actualSum = arr.reduce((tot, num) => tot + num, 0);
console.log(expectedSum - actualSum)