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
        return;
}

    if (lastName.value === "" || lastName.value == null) {
        alert("Please, enter your last name!");
        return;
}
    
    if (email.value === "" || email.value == null) {
        alert("Please, enter your email address!");
        return;
}

  

if (career.value === "" || career.value == null) {
    alert("Please, enter your career!");
    return;
}


if (password.value === "" || password.value == null) {
    alert("Please, enter your password!");
    return;

}

if (password.value.length > 20) {
    alert("Password must not be more than 20 characters");
    return;
}

if (conpass.value === "" || conpass.value == null) {
    alert("Please, confirm password!")
    return;
}


if (conpass.value !== password.value) {
    alert("Passwords do not match!");
} else {
    alert("Correct password!");
}

alert("Form submitted successfully!");
form.submit()

});


