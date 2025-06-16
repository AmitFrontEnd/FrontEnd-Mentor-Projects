import { titleArray, ImageURLs, introsArray } from "./content.js";

let currentItem = 0;

let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let nav = document.querySelector('nav');
let Primage = document.querySelector('.product-images > img');
let PrTitle = document.querySelector('.product-info h1');
let prDesc = document.querySelector('.product-info > p');
let next = document.querySelector('.next');
let back = document.querySelector('.back');

menu.addEventListener('click', () => {
    nav.style.transform = 'translateY(0)';
});

close.addEventListener('click', () => {
    nav.style.transform = 'translateY(-50px)';
});

Primage.src = ImageURLs[currentItem];
PrTitle.innerText = titleArray[currentItem];
prDesc.innerText = introsArray[currentItem];

back.addEventListener('click', () => {
    if (currentItem === 0) {
        currentItem = titleArray.length - 1; 
    } else {
        currentItem--;
    }
    Primage.src = ImageURLs[currentItem];
    PrTitle.innerText = titleArray[currentItem];
    prDesc.innerText = introsArray[currentItem];
});

next.addEventListener('click', () => {
    if (currentItem >= titleArray.length - 1) {
        currentItem = 0; 
    } else {
        currentItem++;
    }
    Primage.src = ImageURLs[currentItem];
    PrTitle.innerText = titleArray[currentItem];
    prDesc.innerText = introsArray[currentItem];
});
