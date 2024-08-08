function create() {
    let ele = document.createElement("div");
    ele.textContent = "My Contents"
    ele.setAttribute('class','ele')
    document.body.appendChild(ele)
}