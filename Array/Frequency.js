let arr = ['shubham', 'cute', 'tom', 'new', 'shubham'];
// let arr = [1, 2, 3, 4, 1];

let count = {};
for (a of arr) {
    if (count[a]) {
        count[a]++
    }
    else {
        count[a] = 1;
    }
}

console.log(count[1])

