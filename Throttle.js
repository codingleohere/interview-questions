function throtle() {
    let lastEntry = 0;
    return function () {
        let now = Date.now();
        if (now - lastEntry >= 1000) {
            console.log("Called")
           lastEntry = now
        }
    }
}
let ob = throtle();
window.addEventListener('resize', function () {
    ob();
})