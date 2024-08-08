let num1 = 0, num2 = 1, sum = 0;
function fibo(num) {
    if (num == 1) {
        return num;
    }
    if (num == 2) {
        return num;
    }
    else {
        for (let i = 2; i < num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
            console.log(sum)
        }
   
    }
}
fibo(30)