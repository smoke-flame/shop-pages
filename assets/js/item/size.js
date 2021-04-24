const sizes = document.querySelectorAll('.info__size__item');

sizes.forEach(item => {
    item.addEventListener('click', event => {
        if (event.target) {
            sizes.forEach(item => item.classList.remove('active'));
            event.target.classList.add('active');
        }
    })
})