const slide1 = [
    {
        id: 1,
        passage: "joshua 1:8",
        content: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy wat prosperous, and then thou shalt have good success.",
    },
    {
        id: 2,
        passage: "Hebrews 12:2",
        content: "Looking unto Jesus the author and finisher of our faith; who for the Joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
    },
    {
        id: 3,
        passage: "James 1:17",
        content: "Every good and every perfect gift is from above, and cometh down from the Father of lights, with whom there is no variablenss, neither shadow of turning.",
    },
    {
        id: 4,
        passage: "Epesians 5:1",
        content: "And walk in Love, as Chrisst also hath loved us. and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.",
    },
    {
        id: 5,
        passage: "Philipians 4:13",
        content: "I can do all things through Christ which strengtheneth me.",
    }
];

const slide2 = [
    {
        id: 1,
        passage: "joshua 1:8",
        content: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy wat prosperous, and then thou shalt have good success.",
    },
    {
        id: 2,
        passage: "Hebrews 12:2",
        content: "Looking unto Jesus the author and finisher of our faith; who for the Joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
    },
    {
        id: 3,
        passage: "James 1:17",
        content: "Every good and every perfect gift is from above, and cometh down from the Father of lights, with whom there is no variablenss, neither shadow of turning.",
    },
    {
        id: 4,
        passage: "Epesians 5:1",
        content: "And walk in Love, as Chrisst also hath loved us. and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.",
    },
    {
        id: 5,
        passage: "Philipians 4:13",
        content: "I can do all things through Christ which strengtheneth me.",
    },
    {
        id: 1,
        passage: "joshua 1:8",
        content: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy wat prosperous, and then thou shalt have good success.",
    },
    {
        id: 2,
        passage: "Hebrews 12:2",
        content: "Looking unto Jesus the author and finisher of our faith; who for the Joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
    },
    {
        id: 3,
        passage: "James 1:17",
        content: "Every good and every perfect gift is from above, and cometh down from the Father of lights, with whom there is no variablenss, neither shadow of turning.",
    },
    {
        id: 4,
        passage: "Epesians 5:1",
        content: "And walk in Love, as Chrisst also hath loved us. and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.",
    },
    {
        id: 5,
        passage: "Philipians 4:13",
        content: "I can do all things through Christ which strengtheneth me.",
    },
    {
        id: 1,
        passage: "joshua 1:8",
        content: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy wat prosperous, and then thou shalt have good success.",
    },
    {
        id: 2,
        passage: "Hebrews 12:2",
        content: "Looking unto Jesus the author and finisher of our faith; who for the Joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
    },
    {
        id: 3,
        passage: "James 1:17",
        content: "Every good and every perfect gift is from above, and cometh down from the Father of lights, with whom there is no variablenss, neither shadow of turning.",
    },
    {
        id: 4,
        passage: "Epesians 5:1",
        content: "And walk in Love, as Chrisst also hath loved us. and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.",
    },
    {
        id: 5,
        passage: "Philipians 4:13",
        content: "I can do all things through Christ which strengtheneth me.",
    },
    {
        id: 1,
        passage: "joshua 1:8",
        content: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy wat prosperous, and then thou shalt have good success.",
    },
    {
        id: 2,
        passage: "Hebrews 12:2",
        content: "Looking unto Jesus the author and finisher of our faith; who for the Joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
    },
    {
        id: 3,
        passage: "James 1:17",
        content: "Every good and every perfect gift is from above, and cometh down from the Father of lights, with whom there is no variablenss, neither shadow of turning.",
    },
    {
        id: 4,
        passage: "Epesians 5:1",
        content: "And walk in Love, as Chrisst also hath loved us. and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.",
    },
    {
        id: 5,
        passage: "Philipians 4:13",
        content: "I can do all things through Christ which strengtheneth me.",
    }
];
let count = 0;
const scrpture = document.querySelector('#pass1');
const scripture = document.querySelector('.passage');
const content1 = document.querySelector('.content');
const contnt = document.querySelector('#cont');
const bkwardSlide = document.querySelector('.backward');
const frwardSlide = document.querySelector('.forward');
const rdnBtn = document.querySelector('#qouteGen');
const header = document.querySelector('.header');
const navBtn = document.querySelector('.navBtn');
const navBar = document.querySelector('.nav');


function slideing() {
    scrpture.innerText = slide1[count].passage;
    contnt.innerText = slide1[count].content;
}

function rdn(item) {
    scripture.textContent  = slide2[count].passage;
    content1.textContent =slide2[count].content;
}

window.addEventListener('DOMContentLoaded', () => {
    slideing(count);
    rdn(count);
})

window.addEventListener("scroll", () => {
    const scroll_Y = window.scrollY;
    if(scroll_Y > 150) {
        header.classList.add("scroll");
    }
    else {
        header.classList.remove("scroll");
    }
})

frwardSlide.addEventListener('click', () => {
    count++;
    if(count > slide1.length - 1) {
        count = 0;
    }
    slideing();
})

bkwardSlide.addEventListener('click', () => {
    count--;
    if(count < 0) {
        count = slide1.length - 1;
    }
    slideing();
})

rdnBtn.addEventListener('click', () => {
    count = Math.floor(Math.random() * slide2.length);
    rdn();
})

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
})