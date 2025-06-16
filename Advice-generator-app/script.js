let adviceNo=document.querySelector('.advice-no')
let quote=document.querySelector('.advice')
let dice =document.querySelector('.dice')

let URL="https://api.adviceslip.com/advice";


function setadvice() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            quote.innerText = data.slip.advice;
            adviceNo.innerText = data.slip.id; 
        })
}

dice.addEventListener('click',()=>{
    setadvice()
})