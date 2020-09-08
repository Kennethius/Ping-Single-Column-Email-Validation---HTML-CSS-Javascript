const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const emailValue = email.value.trim();


    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email)
    }
}

function setErrorFor(input, message) {
    const emailInput = input.parentElement;
    const small = emailInput.querySelector('small');

    small.innerText = message;
    emailInput.className = 'email-input error';
}

function setSuccessFor(input) {
    const emailInput = input.parentElement;

    emailInput.className = 'email-input success';

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}