const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
]

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
]

const date = document.querySelectorAll('.time');
const daysElement = document.querySelectorAll('.day');
const imgHero = document.querySelectorAll('.img-hero');
const btn_story = document.querySelectorAll('.btn-story');
const story_text = document.querySelectorAll('.story-txt');
const test_wrap = document.querySelector('.text-wrap');
const bkBtn = document.getElementById('bkBtn');
const frBtn = document.getElementById('frBtn');
const navClick = document.querySelector('.navClick');
const nav = document.querySelector('.header-wrap');
const header = document.querySelector('.header');
const links = document.querySelectorAll('.link');
const linked = document.querySelectorAll('.linked')

let main = document.querySelector('.main')
let index = 0;
let intervalID;

// Declaring Variables

function addOne(item) {
    if(item < 10) {
        return item = `0${item}`;
    } else {
        return item;
    }    
}    


setInterval(timeFunc, 1000);
function timeFunc() {
    let time = new Date();
    let hrs = time.getHours();
  
    let amOrPm = hrs >= 12 ? 'pm' : 'am';
    hrs = (hrs % 12) || 12;

    let mins = time.getMinutes();
    let seconds = time.getSeconds();
    let tims = [hrs, mins, seconds]
    
    date.forEach((time, value) => {
        time.textContent = addOne(tims[value])
    })
    document.querySelector('.ampm').textContent = amOrPm;
}
// Time function
function dateFunc() {
    let Ddate = new Date()
    let day = Ddate.getDate();
    let dayOfWeek = Ddate.getDay();
    let month = Ddate.getMonth();
    let year = Ddate.getFullYear();

    day = addOne(day);
    dayOfWeek = days[dayOfWeek];
    month = months[month]


    datesCont = [day, dayOfWeek, month, year]

    daysElement.forEach((dateEl, value) => {
        dateEl.textContent = datesCont[value]
    })

}
dateFunc()

// Date Function
let imgHeroInterval = setInterval(loadFunc,5000)
function loadFunc() {
    index++
    if(index > imgHero.length -1) {
        index = 0
    }
    changeContent()
}

function changeContent() {    
    imgHero.forEach(item => item.classList.remove('active'));
    imgHero[index].classList.add('active')
}
// ImG Slding Function
btn_story.forEach((btn, i) => {
    btn.addEventListener('click', ()=> {
        btn_story.forEach(item => item.classList.remove('active'))
        btn.classList.add('active')
        story_text.forEach(item => item.classList.remove('active'))
        story_text[i].classList.add('active')
    })
})
// BTN STory Function
const test_card = test_wrap.querySelectorAll('.text-card');

// testContent()
let indexID = 0;
function interval() {
    if(intervalID) clearInterval(intervalID);

    intervalID = setInterval(() => {
        indexID++;
        if(indexID > test_card.length -1) {
            indexID = 0;
        }
         testContent()
    console.log(indexID)

    }, 10000);
}

window.onload = interval


function testContent() {
    // let contWidth = test_wrap.getBoundingClientRect().width;
    // let cardsWidth = contWidth / 2;
    test_card.forEach(testCard => {
        let cardsWidth = testCard.offsetWidth;
        test_wrap.style.right = cardsWidth * indexID + 'px';
    })
}
testContent()

navClick.addEventListener('click', () => {
    nav.classList.toggle('active')
    if(nav.classList.contains('active')) {
      document.body.style.overflowY = "hidden";
      main.classList.add('add')
    } else {
      main.classList.remove('add')
      document.body.style.overflowY = "auto";
    }
})
// Navbar
    let hHeight = header.getBoundingClientRect().height;
function headScroll() {
    let scrolY = window.scrollY;
    if(scrolY > hHeight) {
        header.classList.add("scroll")
    }else {
        header.classList.remove("scroll")
    }
}

headScroll()

window.addEventListener('scroll', () => {
   headScroll()
   linked.forEach((linkd, i) => {
    let positions = linkd.getBoundingClientRect().top;  

    if(positions <= hHeight) {
        links.forEach(item => item.classList.remove('active'))
        links[i].classList.add("active")
    }
   })
})

links.forEach((link, i )=> {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    let secondHeader = document.querySelector('.top-layer')
    let secondHeight = secondHeader.getBoundingClientRect().height
    let computedStyle = getComputedStyle(secondHeader)
    let position = linked[i].offsetTop;  

    if(computedStyle.display == "none") {
      position = position - 75;
    } else {
        if(window.innerWidth <= 850) {
            position = position - hHeight
        }else {
          position = position - (secondHeight * 2) - hHeight;
        }
    }

    

    
    window.scrollTo(0, position)
    nav.classList.remove('active')
    main.classList.remove('add')
    document.body.style.overflowY = "auto";
  })
})
