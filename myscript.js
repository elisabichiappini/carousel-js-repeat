'use strict';
//carousel
const arrayImage = ['01.jpg', '02.jpg', '03.jpg', '04.jpg'];

// const boxCarousel = document.createElement('div');
// boxCarousel.classList.add('images')

let currentImage = 0;
const items = document.querySelector('.items');

for(let i = 0; i < arrayImage.length; i++) {
    console.log(arrayImage[i]);
    const boxImage = document.createElement('div');
    boxImage.classList.add('item');

    if(i === currentImage) {
        boxImage.classList.add('active');
    };

    const elementImg = document.createElement('img');
    elementImg.src = `img/${arrayImage[i]}`;
    elementImg.alt = `img-${i}`;

    boxImage.append(elementImg);
    items.append(boxImage);
};


const prev = document.querySelector('.prev');
prev.innerHTML = `<span>prev</span>`;
const next = document.querySelector('.next');
next.innerHTML = `<span>next</span>`;


const elementBoxImage = document.querySelectorAll('.item');
console.log(elementBoxImage);

next.addEventListener('click', function () {
    console.log(currentImage);
    elementBoxImage[currentImage].classList.remove('active');
    if(currentImage === arrayImage.length -1) {
        currentImage = 0;
    } else {
        currentImage++; 
    }
    elementBoxImage[currentImage].classList.add('active')
})

prev.addEventListener('click', function () {
    console.log(currentImage);
    elementBoxImage[currentImage].classList.remove('active');
    if (currentImage === 0) {
        currentImage = arrayImage.length-1; 
    } else {
        currentImage--;
    }
    elementBoxImage[currentImage].classList.add('active');
});