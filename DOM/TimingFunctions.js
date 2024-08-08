function Test() {
    setTimeout(() => {
        console.log("Shubham")
    }, 1000)
}

let myv = setInterval(Test, 1000)


function Fun() {
    console.log(":ss")
    clearInterval(myv)
}
