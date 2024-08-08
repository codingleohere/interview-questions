function rec(num) {
    if (num > 0) {
        console.log(num)
        return num + rec(num - 1);
    }
    else {
        return num;
    }
}
console.log(rec(19));