// NAV BAR
const themeToggler = document.querySelector('.l_nav_icon');
const faqButton = document.querySelectorAll(".l_faq_quest");
const faqAns = document.querySelectorAll(".faq_answr");
const navBar = document.querySelector(".navBarMobile");
const navLists = document.querySelector(".d_nav_bar_lists");

// Toggler Theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('nightMode');
    // console.log('night');
    // alert('hello');
})
// FAQ button answer
// faqButton.forEach(l_faq_quest => {
//     l_faq_quest.addEventListener('click', () => {
//         faqAns.forEach(faq_answr => {
//             faqAns.style.minHeight = 2 + "em";
//             faqAns.classList.toggle('toggle')
//         });
//         alert(faqButton);
//     })

// })

navBar.addEventListener('click', () => {
    // navLists.style.left = 0;
    // navLists.style.width = 20 + 'em';
    // navLists.style.height = 100 + '%';
    alert('hello');
})

