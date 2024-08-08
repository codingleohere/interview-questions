// //call
// const person1 = { name: 'John' };
// function greet(greeting, nam) {
//     console.log(greeting, nam + ' ' + this.name);
// }
// greet.call(person1, 'Hello', "ss"); // Output: Hello John
// //apply
// function greet(greeting, sas) {
//     console.log(greeting, sas + ' ' + this.name);
// }

// greet.apply(person1, ['Hello', 'Dekk']); // Output: Hello John

//bind
const person = {
    firstName: 'Shubham',
    age: '23',
    getDetails: function () {
        console.log(this.firstName, this.age)
    }
}

// person.getDetails()

let newPerson = {
    firstName: 'Jarvis',
    age: '44'
}

person.getDetails.bind(newPerson)()