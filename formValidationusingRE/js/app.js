let Name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let feedback = document.getElementById('feedback');
let feedback1 = document.getElementById('feedback1');
let feedback2 = document.getElementById('feedback2');
let form = document.getElementById('form');

Name.addEventListener('input', (e) => {
    let string = /^[a-zA-Z]([a-zA-Z0-9]){2,10}$/;
    if (string.test(Name.value)) {
        // console.log("Entered name is in valid format");
        if (Name.classList.contains('is-invalid') | feedback.classList.contains('invalid-feedback')) {
            Name.classList.remove('is-invalid');
            feedback.classList.remove('invalid-feedback');
        }
        Name.classList.add('is-valid');
        feedback.classList.add('valid-feedback');
        feedback.innerText = "Looks good";

    }
    else {
        // console.log("The number of characters are not in the range 2-10 or the entered input starts with a digit");
        if (Name.classList.contains('is-valid') | feedback.classList.contains('invalid-feedback')) {
            Name.classList.remove('is-valid');
            feedback.classList.remove('valid-feedback');
        }
        Name.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback');
        feedback.innerText = "Your username must be 2-10 characters long and should not start with a number";
    }
});

email.addEventListener('input', () => {
    let string = /^[a-zA-Z0-9_\.\-]+@[\-a-zA-Z0-9]+\.[a-zA-Z]{2,7}$/;
    if (string.test(email.value)) {
        // console.log("Entered name is in valid format");
        if (email.classList.contains('is-invalid') | feedback1.classList.contains('invalid-feedback')) {
            email.classList.remove('is-invalid');
            feedback1.classList.remove('invalid-feedback');
        }
        email.classList.add('is-valid');
        feedback1.classList.add('valid-feedback');
        feedback1.innerText = "Looks good";

    }
    else {
        // console.log("The number of characters are not in the range 2-10 or the entered input starts with a digit");
        if (email.classList.contains('is-valid') | feedback1.classList.contains('invalid-feedback')) {
            email.classList.remove('is-valid');
            feedback1.classList.remove('valid-feedback');
        }
        email.classList.add('is-invalid');
        feedback1.classList.add('invalid-feedback');
        feedback1.innerText = "You have entered an invalid email format";

    }

});
phone.addEventListener('input', () => {
    let string = /^[0-9]{10}$/;
    if (string.test(phone.value)) {
        // console.log("Entered name is in valid format");
        if (phone.classList.contains('is-invalid') | feedback2.classList.contains('invalid-feedback')) {
            phone.classList.remove('is-invalid');
            feedback2.classList.remove('invalid-feedback');
        }
        phone.classList.add('is-valid');
        feedback2.classList.add('valid-feedback');
        feedback2.innerText = "Looks good";
    }
    else {
        // console.log("The number of characters are not in the range 2-10 or the entered input starts with a digit");
        if (phone.classList.contains('is-valid') | feedback2.classList.contains('invalid-feedback')) {
            phone.classList.remove('is-valid');
            feedback2.classList.remove('valid-feedback');
        }
        phone.classList.add('is-invalid');
        feedback2.classList.add('invalid-feedback');
        feedback2.innerText = "Your phone number should be of 10 digits";
    }

});

let submit = document.getElementById('submit');
let alert = document.getElementById('alert');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (Name.classList.contains('is-valid') && email.classList.contains('is-valid') && phone.classList.contains('is-valid')) {
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.innerHTML = `<strong>Success!</strong> Form was successfully submitted.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        Name.classList.remove('is-valid');
        email.classList.remove('is-valid');
        phone.classList.remove('is-valid');
        form.reset();

    }
    else {
        alert.classList.add('alert-danger');
        alert.innerHTML = `<strong>Fail!</strong> Some fields were not filled correctly.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    }

});