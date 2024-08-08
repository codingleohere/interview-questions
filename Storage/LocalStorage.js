function saveData() {
    localStorage.setItem("name", "Shubham");
}
function getData() {
    console.log(localStorage.getItem("name"))
}

document.getElementById("all").addEventListener('click', getData)