let fun = (() => {
    let executes = false;
    return function () {
        if (!executes) {
            executes = true
            console.log("first")
        }
    }
})()

fun(); // "do something" happens
fun(); // nothing happens
fun(); // nothing happens