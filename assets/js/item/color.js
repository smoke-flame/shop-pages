const colors = document.querySelectorAll('.info__color__item');

colors.forEach(item => {
    item.addEventListener('click', event => {
        if (event.target) {
            colors.forEach(item => item.classList.remove('active'));
            event.currentTarget.classList.add('active');
        }
    })
})