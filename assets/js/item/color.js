const colors = document.querySelectorAll('.info__color__item');

colors.forEach(item => {
    item.addEventListener('click', event => {
        if (event.target) {
            caruselWrapper.innerHTML = '';
            colors.forEach(item => item.classList.remove('active'));
            event.currentTarget.classList.add('active');
            let counter = event.currentTarget.getAttribute('data-counter');
            console.log(allPictures);

            allPictures[counter].forEach(item => {
                caruselWrapper.insertAdjacentHTML('beforeend', item);
            })
        }
    })
})