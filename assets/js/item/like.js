const likeItem = document.querySelector('.header__like');
likeItem.addEventListener('click', event => {
    likeItem.classList.toggle('active');
})