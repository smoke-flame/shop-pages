const container = document.querySelector('.main__product__carusel');
const carusel = document.querySelector('.main__product__carusel__transform')
const caruselItems = document.querySelectorAll('.main__product__carusel__item');


const pointers = document.querySelectorAll('.main__product__dots__item');
const pointerParrent = document.querySelector('.main__product__dots')


const ItemWidth = caruselItems[0].clientWidth;
let position = 0;

///////////////// swipe

let x1 = null,
    x2 = null,
    swipe = null,
    isSwipe = false
needToSwipe = ItemWidth / 3;

container.addEventListener('touchstart', event => {
    x1 = event.changedTouches[0].clientX;
})

container.addEventListener('touchmove', event => {

    x2 = event.changedTouches[0].clientX;
    swipe = x2 - x1;
    slideCard(position + swipe);
    if (swipe > needToSwipe || swipe * -1 > needToSwipe) {
        isSwipe = true;
    } else {
        isSwipe = false;
    }
});

container.addEventListener('touchend', () => {
    if (!isSwipe) {
        slideCard(position);

    } else if (swipe > needToSwipe && isSwipe) {
        isSwipe = !isSwipe;
        leftSwipeApp();

    } else if (Math.abs(swipe) > needToSwipe && isSwipe) {
        isSwipe = !isSwipe;
        rightSwipeApp();
    }
});




pointerParrent.addEventListener('click', event => {
    if (event.target) {
        if (event.target == pointers[0]) {
            position = 0;
        } else if (event.target == pointers[1]) {
            position = ItemWidth * -1;
        } else if (event.target == pointers[2]) {
            position = ItemWidth * -2;
        } else if (event.target == pointers[3]) {
            position = ItemWidth * -3;
        } else if (event.target == pointers[4]) {
            position = ItemWidth * -4;
        } else if (event.target == pointers[5]) {
            position = ItemWidth * -5;
        }
        toogleClass(position)
        slideCard(position);
    }

})



/////////////////////////// functions


function rightSwipeApp() {

    position -= ItemWidth;
    if (position <= (caruselItems.length * ItemWidth) * -1) position = 0;
    toogleClass(position);
    slideCard(position);

}

function leftSwipeApp() {
    position += ItemWidth;
    if (position > 0) position = ((caruselItems.length - 1) * ItemWidth) * -1;
    toogleClass(position);
    slideCard(position);

}

function slideCard(pos) {
    carusel.style.transform = `translateX(${pos}px)`;
};

function toogleClass(pos) {
    let activeItem = (pos / ItemWidth);
    if (activeItem < 0) {
        activeItem = activeItem * -1
    }

    caruselItems.forEach(item => {
        item.classList.remove('active')
    });
    pointers.forEach(item => {
        item.classList.remove('active')
    });

    pointers[activeItem].classList.add('active');
}