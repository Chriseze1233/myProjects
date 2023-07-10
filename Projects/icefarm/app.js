const hamburgerOne = document.querySelector('.hamburger-one');
const navOne = document.querySelector('.top-nav-items');
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');
const navTwo = document.querySelector(".bottom-nav-items");
const body = document.querySelector(".body")
const nightMode = document.querySelector('.night');
const toTop = document.querySelector('.toTop');


hamburgerOne.addEventListener('click', () => {
    hamburgerOne.classList.toggle("close");
    navOne.classList.toggle("show")
})

openNav.addEventListener('click', () => {
    // navTwo.style.left = 0;
    navTwo.classList.toggle('active');
    body.classList.toggle("active");
    console.log(openNav)
})

closeNav.addEventListener('click', () => {
    // navTwo.style.left = "-2000px";

    navTwo.classList.toggle('active');
    body.classList.toggle("active");
})



nightMode.addEventListener('click', () => {
    document.body.classList.toggle('darkmode')
})

function up() {
    let scroll = window.scrollY;
    if (scroll > 500) {
        toTop.style.display = 'initial'
    } else {
        toTop.style.display = 'none'
    }
}

function appearItem() {
    let scrollItem = document.querySelectorAll('.scroll-x');
    let scrollItem2 = document.querySelectorAll('.scroll-y');
    let scrollItem3 = document.querySelectorAll('.priceCards');
    let scrollItem4 = document.querySelectorAll('.blogCard')

    //let itemPosition = scrollItem[i].getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.1;

    for (var i = 0; i < scrollItem.length; i++) {
        let itemPosition = scrollItem[i].getBoundingClientRect().top;

        if (itemPosition < screenPosition) {
            scrollItem[i].classList.add('scrolling-x')
        }
    }


    for (var i = 0; i < scrollItem2.length; i++) {

        let itemPosition2 = scrollItem2[i].getBoundingClientRect().top;

        if (itemPosition2 < screenPosition) {
            scrollItem2[i].classList.add('scrolling-y')
        }
    }

    for (var i = 0; i < scrollItem3.length; i++) {

        let itemPosition3 = scrollItem3[i].getBoundingClientRect().top;

        if (itemPosition3 < screenPosition) {
            scrollItem3[i].classList.add('scrolling-x2')
        }
    }

    for (var i = 0; i < scrollItem4.length; i++) {

        let itemPosition4 = scrollItem4[i].getBoundingClientRect().top;

        if (itemPosition4 < screenPosition) {
            scrollItem4[i].classList.add('scrolling-y2')
        }
    }
}

window.addEventListener('scroll', up);

window.addEventListener('scroll', appearItem);