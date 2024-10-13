const form = document.getElementById('form');
const names = document.getElementById('names'); 
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const terms = document.getElementById('terms');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const namesValue = names.value.trim();
    const surnameValue = surname.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Validate Name
    if (namesValue === '') {
        setErrorFor(names, 'Name cannot be blank');
    } else {
        setSuccessFor(names);
    }

    // Validate Surname
    if (surnameValue === '') {
        setErrorFor(surname, 'Surname cannot be blank');
    } else {
        setSuccessFor(surname);
    }

    // Validate Age
    if (ageValue === '' || isNaN(ageValue)) {
        setErrorFor(age, 'Please enter a valid age');
    } else {
        setSuccessFor(age);
    }

    // Validate Email
    if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Invalid email format');
    } else {
        setSuccessFor(email);
    }

    // Validate Password
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    // Ensure terms are accepted
    if (!terms.checked) {
        alert('You must accept the terms and conditions');
        return;
    }

    // If all inputs are valid, display form data
    const formData = {
        names: namesValue,
        surname: surnameValue,
        age: ageValue,
        email: emailValue,
        password: passwordValue,
        terms: terms.checked
    };

    displayFormData(formData);

    // Display confirmation message
    document.getElementById('confirmation-message').textContent = 'Form submitted successfully!';
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // Use parentElement to access the parent div
    const small = formControl.querySelector('small');
    
    // Add error message
    small.innerText = message;

    // Add error class to form-control
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to display form data
function displayFormData(data) {
    const summary = `
        <h2>Form Summary</h2>
        <p><strong>Name:</strong> ${data.names}</p>
        <p><strong>Surname:</strong> ${data.surname}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Password:</strong> ${data.password}</p>
        <p><strong>Accepted Terms:</strong> ${data.terms ? 'Yes' : 'No'}</p>
    `;
    document.getElementById('form-summary').innerHTML = summary;
}
