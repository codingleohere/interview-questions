let num = 23;
let p = true
function isPrime() {
    for (let i = 2; i < num; i++) {
        if (num <= 1) {
            return false
        }
        if (num % i == 0) {
            return false
        }

    }
}
// isPrime()
// console.log(p)

//within range
let range = 50;
function printPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= range; i++) {
    if (printPrime(i)) {
        console.log(i)
    }
}