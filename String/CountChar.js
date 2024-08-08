function count(char) {
    let str = "this is ook"
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count += 1;
        }
    }
    console.log(count)
}
count('t')