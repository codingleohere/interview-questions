const obj = {
    name: 'Shubham',
    age: 20,
}
const obj2 = {
    name: 'Shubham',
    age: 20,
}
const obj3 = { ...obj, obj2 }
obj.new = "ss"
console.log(obj3)

