let toggleContainer = document.querySelector('.rounded');
let toggle = document.querySelector('.circle');
let monthly=document.querySelectorAll('.monthly')
let annual=document.querySelectorAll('.annual')

toggleContainer.addEventListener('click', (e) => {
    toggle.classList.toggle('right');
    if (toggle.classList.contains('right')) {
        toggleContainer.style.backgroundImage = getComputedStyle(document.documentElement).getPropertyValue('--linear-gradient-start') + ',' + getComputedStyle(document.documentElement).getPropertyValue('--linear-gradient-end');
        toggleContainer.style.backgroundColor = ''; 
        monthly.forEach((elem)=>{
            elem.style.display='none'
        })
        annual.forEach((elem)=>{
            elem.style.display='block'
        })
    } else {
        toggleContainer.style.backgroundImage = ''; 
        toggleContainer.style.backgroundColor = '#dacbcb'; 
        toggleContainer.style.backgroundColor = ''; 
        monthly.forEach((elem)=>{
            elem.style.display='block'
        })
        annual.forEach((elem)=>{
            elem.style.display='none'
        })
    }
});
