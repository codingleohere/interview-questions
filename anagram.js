let str = 'gum shubham mug okat toka java vaja';
let words = str.split(' ');
let count = {};
words.forEach((word) => {
    let sorted = word.split('').sort().join('');
    if (count[sorted]) {
        count[sorted]++
    }
    else {
        count[sorted] = 1;
    }
})
console.log(Object.keys(count).filter((word) => count[word] > 1))