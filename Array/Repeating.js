let arr = [1, 2, 45, 2, 1, 3, 2]
let count = {}
arr.forEach(element => {
    if (count[element]) {
        count[element]++;
    }
    else {
        count[element] = 1;
    }
});

// Less Repeating Numbers
// console.log(arr.find(num => count[num] === 1))//find returns first element that passed test
// console.log(arr.findLast(num => count[num] === 1))//findLast returns last element that passed test
// console.log(Math.max(Number(Object.values(count))))

// More Repeating Numbers
let arrC = Object.values(count);
let min = Math.min(...arrC);
let max = Math.max(...arrC);
let maxKey = Object.keys(count).find(key => count[key] == max)
// console.log(arr.find((ele) => count[ele] === max))