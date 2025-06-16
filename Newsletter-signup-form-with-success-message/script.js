let submit = document.querySelector('.send')
let successDIv = document.querySelector('.success-container')
let appContainer = document.querySelector('.app-container')
let email = document.querySelector('input[type="email"]')
let error = document.querySelector('#error-label')
let reset=document.querySelector('.reset')
let userEmail=document.querySelector('.user-email')


submit.addEventListener('click', () => {
    let emailValue = email.value;
    if (emailValue.includes('@')) {
        error.style.display = 'none'

        appContainer.style.display = "none"
         successDIv.style.display = "block"
         userEmail.innerText=emailValue;

    } else {
        error.style.display = 'block'
        successDIv.style.display = "none" }
})

reset.addEventListener('click',()=>{
    location.reload();
})