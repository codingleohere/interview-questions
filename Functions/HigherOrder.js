const getAndDouble = (arr, double) => {
    let result = [];

    for (i of arr) {
        result.push(double(i))
    }

    return result
}

function double(d) {
    return d * 2
}

let doubledArrays = getAndDouble([1, 2, 3, 4], double);
console.log(doubledArrays)