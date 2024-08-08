function calculate(lenght) {
    
    return function (bradth) {
        return function (height) {
            return lenght * bradth * height;
        }
    }
}

console.log(calculate(4)(5)(6));
