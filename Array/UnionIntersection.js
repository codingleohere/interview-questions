let arr1 = [1, 3, 4, 5]
let arr2 = [2, 3, 4]
console.log(arr1.filter(a => arr2.includes(a)))
let s = new Set([...arr1, ...arr2])
console.log(s)