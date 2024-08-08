var form = document.querySelector("#registration-form");
form.addEventListener(
    "input",
    function (event) {
        // Log the field that was changed
        console.log(event.target.value);
    },
    false
);