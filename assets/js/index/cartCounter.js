const cartCounterBlock = document.querySelector('.footer__cart__counter');
let counterField = document.querySelector('.footer__cart__counter__item');
let counter = 0;
if (counter == 0) {
    cartCounterBlock.style.display = 'none';
}

function addCount() {
    counter++;
    if (counter == 0) {
        cartCounterBlock.style.display = 'none';
    } else {
        counterField.textContent = counter;
        cartCounterBlock.style.display = 'flex';
    }
}

function removeCount() {
    counter--;
    if (counter == 0) {
        cartCounterBlock.style.display = 'none';
    } else {
        counterField.textContent = counter;
        cartCounterBlock.style.display = 'flex';
    }
}