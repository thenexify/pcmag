const addToCartButton = document.querySelector('[add-to-cart]');
const cartBody = document.getElementById('cartBody');
const itemTitle = document.querySelector('[item-title]');
const itemPrice = document.querySelector('[data-price]');

addToCartButton.addEventListener('click', ()=>{
    const cartElement = document.createElement('div');
    cartElement.className = 'cartElement';
    const innerhtml = `<p>${itemTitle.innerText}</p>
    <p>${itemPrice.innerText}</p>
    <button class="cancel buy-item">✖</button>`
    cartElement.innerHTML = innerhtml;
    cartBody.append(cartElement);

    const removeItemButtons = document.getElementsByClassName('cancel');
    Array.from(removeItemButtons).forEach(button=>{
        button.addEventListener('click', ()=>{
            button.parentElement.remove();
        });
    })
});
