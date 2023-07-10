const dates = document.querySelectorAll('.contCard .time');
const faqCont = document.querySelectorAll('.faqWarpper');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navMain = document.querySelector('.navCont');
const navBtn = document.querySelector('.navBtn .bars');
const links = document.querySelectorAll('.links')
const close = document.querySelector('#close');
const getStartedBtns = document.querySelectorAll('.start');
const getStarted = document.querySelector('.wallet');
let headerH = header.getBoundingClientRect().height;


// Date USing JavaScript
let countDownDate = new Date('1 Aug 2023');
function count_down() {
    const time = new Date().getTime();
    const rTime = countDownDate - time;

    const oneWeek = 7*24*60*60*1000;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;

    const week = Math.floor(rTime / oneWeek)
    const day = Math.floor(rTime / oneDay);
    const hour = Math.floor((rTime % oneDay) / oneHour)
    const min = Math.floor((rTime % oneHour) / oneMin);
    const secs = Math.floor((rTime % oneMin) / 1000);

    const values = [week,
        day,
        hour,
        min,
        secs];
    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }
    dates.forEach((date, index) => {
        date.innerHTML = format(values[index]);
    })
}
let interval = setInterval(() => {
    count_down()
}, 1000);
count_down();
// Frequently Asked Questions
faqCont.forEach((faq) => {
    const faqBtn = faq.querySelector('.click')
    const faqAns = faq.querySelector('.ans');
    const faqAnsP = faqAns.querySelector('.ans-ans');

    faqBtn.addEventListener('click', () => {
        const faqAnsHeight = faqAns.getBoundingClientRect().height;
        const faqAnsPHeight = faqAnsP.getBoundingClientRect().height;

        faqAns.classList.add('active');
        faqBtn.classList.toggle('active');

        if (faqAnsHeight === 0) {
            faqAns.style.height = `${faqAnsPHeight}px`;
        } else {
            faqAns.style.height = 0;
            faqAns.classList.remove('active');
        }

    })
})

// Hader Related Scripts
navBtn.addEventListener('click', () => {
    const navH = nav.getBoundingClientRect().height;
    const navMainH = navMain.getBoundingClientRect().height;
    if (navMainH === 0) {
        navMain.style.height = `${navH}px`
    } else {
        navMain.style.height = 0;
    }
})

window.addEventListener('scroll', () => {

    let scrollH = window.scrollY;

    if (scrollH > headerH) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
})



function scrollToSection(id) {
    const section = document.getElementById(id);
    let sectionPosition = section.offsetTop - headerH;
    let computedStyle = getComputedStyle(section)
   /* if (header.classList.contains(scroll)) {
        sectionPosition = sectionPosition

    } else {
        sectionPosition = sectionPosition

    }*/
    window.scrollTo({
        top: sectionPosition, behavior: 'smooth'
    });
}

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const sectionId = link.getAttribute('href').slice(1);
        scrollToSection(sectionId);
       // navMain.style.height = 0;

    })
})


//Get Started Scripts
getStartedBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        getStarted.classList.add('scale')
        document.body.style.overflow = "hidden"
    })
})

close.parentElement.addEventListener('click', () => {
    getStarted.classList.remove('scale');
    document.body.style.overflow = "auto"
})

window.addEventListener('click', (e) => {
    let target = e.target;
    // if(e.target !== getStarted) {
    //     getStarted.classList.remove('scale')
    // }
    if(target != navBtn && target != header) {
        navMain.style.height = 0
        //console.log(target)
    }

})