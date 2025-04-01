let str = "shubhams";
let count = {}
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i)
    if (count[ch]) {
        count[ch] += 1
    }
    else {
        count[ch] = 1
    }
}

console.log(count);
// let str = 'repeatr'
// let count = {}
// str.split("").forEach((str) => {
//     if (count[str]) {
//         count[str]++;
//     }
//     else {
//         count[str] = 1
//     }
// })
// let maxCount = Math.max(...Object.values(count))
// // console.log(str.split("").find((ele) => count[ele] == 1))
// // console.log(str.split("").find((ele) => count[ele] == 1))
// console.log(str.split("").find((ele) => count[ele] == maxCount))