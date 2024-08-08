document.getElementById("parent").addEventListener('click', function () {
    console.log('parent')
})
document.getElementById("child").addEventListener('click', function (event) {
    event.stopPropagation();

    console.log('child')
})