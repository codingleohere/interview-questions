// let arr = [200, 18, 2, 39, 4, 5]
// let max = arr[0]
// arr.forEach(element => {
//     if (element > max) {
//         max = element
//     }
// });
// console.log(max);

// -------second Max------------
let arr = [200, 18, 2, 39, 4, 5]
let max = -Infinity
let secmax = -Infinity
arr.forEach(element => {
    if (element > max) {
        secmax = max
        max = element
    } else if (element > secmax && element !== max) {
        secmax = element;
    }
});
console.log(max);
console.log(secmax);