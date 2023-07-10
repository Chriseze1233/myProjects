const navLinks = document.querySelectorAll('.navLink');
const secs = document.querySelectorAll('.sec');
const header = document.querySelector('.header')
const uptodown = document.querySelector('.scrollbacktop');
const currntdate = document.querySelector('.date');
const navBar = document.querySelector('.navClick');
const nav = document.querySelector('.nav');

let headerHeight = header.getBoundingClientRect().height;
let windowHeight = window.innerHeight

navLinks.forEach((navLink, i) => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault()
        if(navLink) {
            navLinks.forEach(item => item.classList.remove('active'));
            navLink.classList.add('active');
            let position = secs[i].offsetTop - headerHeight + 10;
             //console.log(position, secs[i].offsetTop)
             window.scrollTo(0, position)
        }
    })
})

function headerScroll() {
    let scrolY = window.scrollY
    if(headerHeight < scrolY) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }

    if(scrolY > headerHeight * 4) {
        uptodown.classList.add('active')
    } else {
        uptodown.classList.remove('active')
    }
}

currntdate.innerHTML = new Date().getFullYear();

navBar.addEventListener('click', () => {
    nav.classList.toggle('active');
    navBar.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(e.target != nav && e.target != navBar) {
    navBar.classList.remove('active');
    nav.classList.remove('active');
    }
})
window.addEventListener('scroll', () => {
     secs.forEach((sec, i) => {
        let positionY = sec.getBoundingClientRect().top;
        if(positionY < + headerHeight) {
              navLinks.forEach(item => item.classList.remove('active'));
              navLinks[i].classList.add('active');
         }
     })

    headerScroll()
})

