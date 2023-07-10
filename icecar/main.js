const imgs = [
    "./image/car1.png",
    "./image/car2.png",
    "./image/car3.png",
    "./image/car4.png",
    "./image/car5.png",
    "./image/car6.png",
    "./image/car7.png",
    "./image/car8.png",
];

let count = 0;
const imgSLide = document.querySelector(".img-Hero");
const bkSlide = document.querySelector(".backward");
const frSlide = document.querySelector(".foward");
const header = document.querySelector('.header');


window.onload = slideImg();

function slideImg() {
    imgSLide.src = imgs[count];
}

frSlide.addEventListener('click', () => {
    count++;
    if(count > imgs.length - 1) {
        count = 0;
    }
    slideImg();
})

bkSlide.addEventListener("click", () => {
    count--;
    if(count < 0) {
      count = imgs.length -1;
    }
    slideImg();
})
