let submitBtn = document.querySelector('.submit');
let allInputs = document.querySelectorAll('input[type="text"]');
let textarea = document.querySelector('textarea');
let checkbox = document.querySelector('input[type="checkbox"]');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let contactForm = document.querySelector('#contact-form');
let fixed=document.querySelector('.fixed')
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Validating all text inputs
    allInputs.forEach((input) => {
        if (input.value === '') {
            input.nextElementSibling.setAttribute('class', 'error-label');
        } else {
            input.nextElementSibling.setAttribute('class', 'hide-error');
        }
    });

    // Validating textarea
    if (textarea.value === '') {
        document.querySelector('.message-container p').setAttribute('class', 'error-label');
    } else {
        document.querySelector('.message-container p').setAttribute('class', 'hide-error');
    }

    // Validating checkbox
    if (!checkbox.checked) {
        checkbox.nextElementSibling.nextElementSibling.setAttribute('class', 'error-label');
    } else {
        checkbox.nextElementSibling.nextElementSibling.setAttribute('class', 'hide-error');
    }

    // Validating radio buttons
    let error = document.querySelector('#query');
    if (!radio1.checked && !radio2.checked) {
        error.classList.add('error-label');
        error.classList.remove('hide-error');
    } else {
        error.classList.remove('error-label');
        error.classList.add('hide-error');
    }

    // Check if the form is valid
    if (validateForm()) {
        fixed.style.top='20%'
       contactForm.reset()
       setTimeout(() => {
          fixed.style.top='-20%'
    }, 2000);
    
    } else {
        console.log("no");
    }
});

function validateForm() {
    let isValid = true;

    // Check all text inputs
    allInputs.forEach((input) => {
        if (input.value === '') {
            isValid = false;
        }
    });

    // Check textarea
    if (textarea.value === '') {
        isValid = false;
    }

    // Check checkbox
    if (!checkbox.checked) {
        isValid = false;
    }

    // Check radio buttons
    if (!radio1.checked && !radio2.checked) {
        isValid = false;
    }

    return isValid;
}
