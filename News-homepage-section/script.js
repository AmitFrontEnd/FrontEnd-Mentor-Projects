let menuOpen=document.querySelector('.menu-open')
let menuClose=document.querySelector('.menu-close')
let nav=document.querySelector('nav')
let body=document.querySelector('body')

menuOpen.addEventListener('click',()=>{
    menuOpen.style.display='none'
    menuClose.style.display='block'
    nav.classList.add('show-menu')
    body.classList.add('overlay')

})
menuClose.addEventListener('click',()=>{
    menuOpen.style.display='block'
    menuClose.style.display='none'
    nav.classList.remove('show-menu')
    body.classList.remove('overlay')
})