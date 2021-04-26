let sumField = document.querySelector('.footer__left__price');
let subtotal = document.querySelector('.cart__total__subtotal span');
let taxe = 40;

document.querySelector('.cart__total__taxes span').textContent = `$${taxe}`

calculateSum();



let plusBtns = document.querySelectorAll('.cart__item__quantity__plus');
plusBtns.forEach(item => item.addEventListener('click', addItem));

let minusBtns = document.querySelectorAll('.cart__item__quantity__minus');
minusBtns.forEach(item => item.addEventListener('click', removeItem));





function calculateSum() {
    let cardItems = document.querySelectorAll('.cart__item');
    let totalPrise = 0;
    cardItems.forEach(item => {
        let priceForOneItem = Number(item.querySelector('.cart__item__name__price').textContent.trim().substr(1));
        let count = Number(item.querySelector('.cart__item__quantity__counter').textContent);
        let oneItemPrise = priceForOneItem * count;
        totalPrise += oneItemPrise;
    })
    if (totalPrise == 0) {
        let empty = document.createElement('div');
        empty.classList.add('cart__message');
        empty.textContent = 'No products in your cart';
        console.log(empty);
        document.querySelector('.cart__total').style.display = 'none';
        taxe = 0;
        container.insertAdjacentElement('beforebegin', empty);
    }
    subtotal.textContent = `$${totalPrise}`;
    sumField.innerHTML = `<span class="footer__left__price__span">$</span>${totalPrise + taxe}.00`
};

function addItem() {
    let counter = this.parentNode.querySelector('.cart__item__quantity__counter');
    counter.textContent++;
    calculateSum();
}

function removeItem() {
    let counter = this.parentNode.querySelector('.cart__item__quantity__counter');
    counter.textContent--;
    if (counter.textContent == 0) {
        let card = counter.parentNode.parentNode;
        card.style.display = 'none';
    }
    calculateSum();
}