let str = "shubham bhosale oks nasbhasbh"
let strArr = str.split(" ");
let cap = ""
for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
}
console.log(strArr.join(" "))