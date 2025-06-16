let billInput = document.querySelector('.bill-input')
let peopleInput = document.querySelector('.people-input')
let tipContainer = document.querySelector('.tip-container')
let tipAmount = document.querySelector('.tip-amount')
let totalAmount = document.querySelector('.total')
let error = document.querySelector('.error')
let customTip = document.querySelector('#custom-tip')
let reset=document.querySelector('.reset')


billInput.addEventListener('focus', () => {
    billInput.parentElement.classList.add('bill-border')
})
billInput.addEventListener('blur', () => {
    billInput.parentElement.classList.remove('bill-border')
})

tipContainer.addEventListener('click', (e) => {
    if (e.target !== tipContainer && e.target !== tipContainer.lastElementChild) {
        let tipText = e.target.innerText;

        tipText = tipText.replace('%', '')
        let tippercent = Number(tipText)

        let noOfPeople = Number(peopleInput.value)
        let billInputValue = Number(billInput.value)

        if (peopleInput.value == 0) {
            peopleInput.parentElement.classList.add('border-error')
            error.style.display = 'block'
        } else {
            peopleInput.parentElement.classList.remove('border-error')
            error.style.display = 'none'
            let billPeople = billInputValue / noOfPeople
            let answer = (billPeople * tippercent / 100)
            tipAmount.innerText = answer.toFixed(2)
            totalAmount.innerText = (answer + billPeople).toFixed(2)
        }
    }
});

peopleInput.addEventListener('focus',()=>{
    peopleInput.value=''
})

customTip.addEventListener('input', () => {
    let customValue = Number(customTip.value)
    if (customTip.value > 100) {
        alert("Percent can't be greater than 100")
        customTip.value = ''
        return

    }
    let noOfPeople = Number(peopleInput.value)
    let billInputValue = Number(billInput.value)

    if (peopleInput.value == 0) {
        peopleInput.parentElement.classList.add('border-error')
        error.style.display = 'block'
    } else {
        peopleInput.parentElement.classList.remove('border-error')
        error.style.display = 'none'
        let billPeople = billInputValue / noOfPeople
        let answer = (billPeople * customValue / 100)
        tipAmount.innerText = answer.toFixed(2)
        totalAmount.innerText = (answer + billPeople).toFixed(2)
    }
})

function resetCalculator(){
    billInput.value=''
    peopleInput.value='0'
    tipAmount.innerText=''
    totalAmount.innerText=''
    customTip.value=''
}

reset.addEventListener('click',resetCalculator)
