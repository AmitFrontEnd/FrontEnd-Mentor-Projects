let menu=document.querySelector('.open')
let nav=document.querySelector('nav')
let close=document.querySelector('.close')
const firstDiv = document.querySelector('body > div:first-child');

menu.addEventListener('click',()=>{
    nav.classList.toggle('nav-open')
    if(nav.classList.contains('nav-open')){
        menu.src='icon-close-menu.svg'
        firstDiv.classList.add('overlay')
    }else{
         menu.src='icon-menu.svg'
         firstDiv.classList.remove('overlay')
    }
})
