let form = document.getElementById('form');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('email');
let career = document.getElementById('occupy');
let password = document.getElementById('pass');
let conpass = document.getElementById('conpass');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (firstName.value === "" || firstName.value == null) {
        alert("Please, enter your first name!");
}

    if (lastName.value === "" || lastName.value == null) {
        alert("Please, enter your last name!");
}
    
    if (email.value === "" || email.value == null) {
        alert("Please, enter your email address!");
}

  

if (career.value === "" || career.value == null) {
    alert("Please, enter your career!");
}


if (password.value === "" || password.value == null) {
    alert("Please, enter your password!");
}

if (password.value.length > 20) {
    alert("Password must not be more than 20 characters");
    e.preventDefault()
}

if (conpass.value === "" || conpass.value == null) {
    alert("Please, confirm password!")
}

if (conpass.value === "" || conpass.value != password.value) {
    alert("Password does not match!")
} else {
    alert("Correct password!")
}





});