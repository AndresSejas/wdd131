const menubutton = document.querySelector('#menu');
const navlist = document.querySelector('nav');

menubutton.addEventListener('click', () => {
    navlist.classList.toggle('show');
    menubutton.classList.toggle('show')
});