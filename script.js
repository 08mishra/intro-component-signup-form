var form = document.getElementById('formsignup');
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById('lastName').value;
var password = document.getElementById('password').value;
var email = document.getElementById('email').value;


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInputs();
// });

function checkInputs() {


    if (firstName == "") {
        setError(firstName, 'first name cannot be empty');
    } else {
        setSuccess(firstName);
    }

    if (lastName == "") {
        setError(lastName, 'last name cannot be empty');

    } else {
        setSuccess(lastName);

    }

    if (email == "") {
        setError(email, 'email cannot be empty');
    } else if (!isEmail(emailValue)) {
        setError(email, 'email is not valid');

    } else {
        setSuccess(email);
    }

    if (password == "") {
        setError(password, 'password cannot be empty');

    }
}

function setError(input, message) {
    let signupControl = document.getElementById(input).nodeName;

    const small = signupControl.getElementById('small');
    small.innerHTML = message;
    //signupControl.className += " error";
    signupControl.classList.add(" error");

}

function setSuccess(input) {
    const signupControl = input.parentElement;
    //signupControl.className += " success";
    signupControl.classList.add(" success");

}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}