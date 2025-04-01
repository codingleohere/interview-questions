// JavaScript program to find longest consecutive subsequence
const arr = [1, 2, 3, 5, 6, 7, 8, 10, 1];
arr.sort((a, b) => a - b)
//  [1, 1, 2, 3, 5, 6, 7, 8, 10]
let count = 1, result = 1
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        continue
    }
    else if (arr[i] === arr[i - 1] + 1) {//2===2, 3===3, 5===4-===false
        count++;
    }
    else {
        count = 1
    }
    result = Math.max(count, result)
}
console.log(result);