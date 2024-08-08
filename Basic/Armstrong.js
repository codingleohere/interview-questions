let num = 999;
// console.log(Math.floor(num / 10))
// console.log(num % 10)
let temp = num
let sum = 0;

while (temp > 0) {
    let rem = temp % 10; // getting last ele
    // console.log(rem)
    sum += rem * rem * rem;
    temp = parseInt(temp / 10);//removing last ele
}
// console.log(sum)

//whithin series
for (let i = 0; i < 500; i++) {
    let sum = 0;
    let temp = i;

    while (temp > 0) {
        let rem = temp % 10; // getting last ele
        // console.log(rem)
        sum += rem * rem * rem;
        temp = parseInt(temp / 10);//removing last ele
    }
    if (sum == i) {
        console.log(i)
    }
    
}