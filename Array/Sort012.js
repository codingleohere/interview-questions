let arr = [2, 0, 0, 2, 1];
let count = [0, 0, 0]
arr.forEach(ele => {
    if (count[ele]) {
        count[ele]++;
    }
    else {
        count[ele] = 1;
    }
});
console.log(count)
let sortedArray = [...Array(count[0]).fill(0), ...Array(count[1]).fill(1), ...Array(count[2]).fill(2)]
console.log(sortedArray)


