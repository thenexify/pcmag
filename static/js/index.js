const cartElementToggleBtn = document.getElementById('cartToggle');
const cartElement = document.querySelector('.cart');

cartElementToggleBtn.addEventListener('click', ()=>{
    cartElement.classList.toggle('toggled')
})



