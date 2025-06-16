let confirmBtn = document.querySelector('.submit');
let nameInput = document.querySelector('#name-input');
let numberInput = document.querySelector('.number-input');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let cvc = document.querySelector('.cvc');
let cardNumber = document.querySelector('.c-number');
let ownerName = document.querySelector('.name');
let error1=document.querySelector('.er1')
let error2=document.querySelector('.er2')
let date=document.querySelector('.date')
let ryear=document.querySelector('.ryear')
let cvv=document.querySelector('.cvv')
let nameText=document.querySelector('.name')
let form=document.querySelector('form')
let thankYou=document.querySelector('.second')
let subBtn=document.querySelector('.submit')

const validateForm = () => {
    // Check number input
    const isNumberValid = numberInput.value.match(/^[0-9 ]*$/) && numberInput.value.replace(/\s+/g, '').length === 16;
    
    // Check month input
    const isMonthValid = month.value !== '';
    
    // Check year input
    const isYearValid = year.value !== '';
    
    // Check CVC input
    const isCVCValid = cvc.value !== '';
    
    // Check name input
    const isNameValid = nameInput.value !== '';
    
    // Enable or disable submit button
    subBtn.disabled = !(isNumberValid && isMonthValid && isYearValid && isCVCValid && isNameValid);
}

numberInput.addEventListener('keyup', () => {
    if (numberInput.value.match(/^[0-9 ]*$/)) {
        let cleanedValue = numberInput.value.replace(/\s+/g, '');

        // Format the input value with spaces after every 4 digits
        numberInput.value = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        cardNumber.value = numberInput.value;
        numberInput.classList.remove('border-red')

        numberInput.nextElementSibling.style.display = 'none';
    } else {
        numberInput.nextElementSibling.style.display = 'block';
        numberInput.classList.add('border-red')
    }
    validateForm();
});

month.addEventListener('keyup', () => {
    if (month.value === '') {
        error2.style.display = 'block';
        month.classList.add('border-red');
    } else {
        error2.style.display = 'none';
        month.classList.remove('border-red');
        date.innerText = month.value;
    }
    validateForm();
});

year.addEventListener('keyup', () => {
    if (year.value === '') {
        error2.style.display = 'block';
        year.classList.add('border-red');
    } else {
        error2.style.display = 'none';
        year.classList.remove('border-red');
        ryear.innerText = year.value;
    }
    validateForm();
});

cvc.addEventListener('keyup', () => {
    if (cvc.value === '') {
        error1.style.display = 'block';
        cvc.classList.add('border-red');
    } else {
        error1.style.display = 'none';
        cvc.classList.remove('border-red');
        cvv.innerText = cvc.value;
    }
    validateForm();
});

nameInput.addEventListener('input', () => {
    nameText.innerText = nameInput.value;
    validateForm();
});

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!subBtn.disabled) {
        form.style.display = 'none';
        thankYou.style.display = 'block';
    }
});

// Initial validation check
validateForm();

