let people = [{ name: "Shubham", age: 21 }, { name: "TestUser", age: 34 }, { name: "NewUser", age: 23 }]
let filterWithAge = {}
for (p of people) {
    if (!filterWithAge[p.age]) {
        filterWithAge[p.age] = p
    }
    else {
        filterWithAge[p.age].push(p);
    }
}