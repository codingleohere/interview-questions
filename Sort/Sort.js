function sortStudents(a, b) {//2 1
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1 //b is sorted before a. || b a ||
    }
    else if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1 //a is sorted before b. || a b ||
    }
    return 0 //No Change
}

const students = [{ name: 'Aks', age: 24 }, { name: 'Sara', age: 24 }, { name: 'John', age: 24 }, { name: 'Jack', age: 25 }];
console.log(students.sort(sortStudents))

// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.