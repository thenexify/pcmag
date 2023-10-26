const navbar = document.querySelector('.navbar');
const links = document.getElementsByClassName('links')[0];
const button = document.querySelector('.btn-cart');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', ()=>{
    navbar.classList.toggle('col')
    navbar.classList.toggle('hclass')
    links.classList.toggle('display')
    links.classList.toggle('col')
    button.classList.toggle('display')
})