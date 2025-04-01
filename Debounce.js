function debounce(func, delay) {
    let timer;
    return function (name) {
        clearTimeout(timer);
        timer = setTimeout(() => func(name), delay);
    }
}

function myFun(name) {
    console.log(name)
}

let deb = debounce(myFun, 2000)
deb('shubham');