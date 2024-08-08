document.getElementById('parent').addEventListener('click', function () {
    console.log("Parent Clicked")
}, true)
document.getElementById('child').addEventListener('click', function () {
    console.log("Child Clicked")
})
document.getElementById('parent').addEventListener('click', function () {
    console.log("Parent Clicked B=Bubble")
})