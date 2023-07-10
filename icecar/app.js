
const upTo = document.querySelector('.uptodown');
const nav = document.querySelector('#nav');
const openNav = document.querySelector('#openNav');
const closeNav = document.querySelector('#closeNav');

window.addEventListener('scroll', () => {
    let scroll_Y = window.scrollY;
    if(scroll_Y > 150) {
        header.classList.add("scroll");
        upTo.style.visibility = "visible";
    }
    else{
        upTo.style.visibility = "hidden";
        header.classList.remove('scroll');
    }
})

openNav.addEventListener('click', () => {
    nav.style.left = 0;
})

closeNav.addEventListener('click', () => {
    nav.style.left = '-100%';
})

document.addEventListener('click', (e) => {
  let navBit = document.querySelector("#navBit");
  if(e.target.id !== "closeNav" && e.target.id !== "openNav" && e.target.id !== "navBit") {
   nav.style.left = '-100%';
  }
})