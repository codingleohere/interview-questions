function fun() {
    let exec = false;
    if (!exec) {
        console.log('first')
        exec = true
    }
}

fun(); // "do something" happens
fun(); // nothing happens
fun(); // nothing happens