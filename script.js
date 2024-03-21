let header = document.querySelector('.header')

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)

});

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
    };


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

    });

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});