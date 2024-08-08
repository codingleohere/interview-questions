//by this method we can retuern a function which will have access to all functions variables
// function clickHandler(color) {
//     return function () {
//         document.body.style.backgroundColor = `${color}`
//     }
// }

//If we do this directly the function will be executed without us clicking
// function clickHandler(color) {
//     document.body.style.backgroundColor = `${color}`
// }



// document.getElementById('orange').onclick = clickHandler("orange");

// document.getElementById('orange').onclick = function () {
//     document.body.style.backgroundColor = "orange"
// }

// document.getElementById('green').onclick = clickHandler("green");

// document.getElementById('orange').addEventListener('click', clickHandler("orange"))


function counts() {
    let a = 10;
    return function () {
        console.log(a)
        a++
    };
}

document.getElementById("all").addEventListener('click', counts())