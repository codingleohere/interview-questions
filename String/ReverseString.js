let str = "dad"
let newStr = "";
for (let i = str.length; i >= 0; i--) {
    newStr += str.charAt(i);
}

console.log(newStr === str)

//Other Type
//mahbuhS elasohB 
let strArr = str.split(" ");
let revStrArr = strArr.map(s => s.split("").reverse().join(""))
console.log(revStrArr.join(" "))
//here we are using split("") because we want to split it into arrays so that reveser method can work. If we use (" ") it will create whole array and there will be nothing