const navBtn = document.querySelector('#nav-btn');
const menu = document.querySelector('#nav');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

function shoMenu() {
    navBtn.classList.toggle('btn-active');
    menu.classList.toggle('nav-active');
    body.classList.toggle('hidden')
}

navBtn.addEventListener('click', (e) =>  {
    e.preventDefault();
    shoMenu();
});

navLinks.forEach(el => {
    el.addEventListener('click', (e) =>  {
        e.preventDefault();
        navBtn.classList.remove('btn-active');
        menu.classList.remove('nav-active');
        body.classList.remove('hidden')
    });
})