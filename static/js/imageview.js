const mainImageView = document.getElementById('main-image');
const imagesList = document.getElementsByClassName('images-list')[0].children;

Array.from(imagesList).forEach(element=>{
    element.addEventListener('click', ()=>{
        mainImageView.src = element.src
    })
})