//yellowPicturesHTML, redPicturesHTML, pinkPicturesHTML, bluePicturesHTML
const caruselWrapper = document.querySelector('.main__product__carusel__transform');
yellowPicturesHTML.forEach(item => {
    caruselWrapper.insertAdjacentHTML('beforeend', item);
})