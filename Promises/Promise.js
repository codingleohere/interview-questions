const fetchUsers = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Shubham User";
        resolve(data);

        reject(new Error('Failed'))
    }, 1000);
})

fetchUsers.then((data) => {
    console.log("Data", data)
})
    .catch((error) => {
        console.log("Failed", error)
    })