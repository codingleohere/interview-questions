const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 4, b: { c: 2 } };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))