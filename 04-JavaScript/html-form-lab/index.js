let formElement = document.querySelector('.form1');
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const password1 = e.target.password.value;
    const password2 = e.target.confirmPassword.value;

    const formElements = e.target.childNodes[1];
    const formValues = {
        fullName: formElements.querySelector('#fullName').value,
        email: formElements.querySelector('#email').value,
        password1: formElements.querySelector('#password').value,
        password2: formElements.querySelector('#confirmPassword').value
    }
    if (password1 !== password2) {
        alert('Passwords do not match')
    } else {
        console.log(formValues);
    }
})


console.log('end');