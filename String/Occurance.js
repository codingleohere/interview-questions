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