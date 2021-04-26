const container = document.querySelector('.cart__total');
let arrayOfProducts = parseToHtml(products);


arrayOfProducts.forEach(item => {
    container.insertAdjacentElement('beforebegin', item);
})

function parseToHtml(array) {
    let result = [];

    array.map(item => {
        let card = document.createElement('div');
        card.classList.add('cart__item');
        let code = `
        <div class="cart__item__photo style='background-color: ${item.background};">
        <div class="cart__item__photo__mask">
          <div class="cart__item__photo__img">
            <img src="${item.photoSrc}" alt="sneaker" />
          </div>
        </div>
      </div>
      <div class="cart__item__name">
        <div class="cart__item__name__title">${item.name}</div>
        <div class="cart__item__name__price">
          <span class="cart__item__name__price__span">$</span> ${item.price}
        </div>
      </div>
      <div class="cart__item__quantity">
        <div class="cart__item__quantity__minus">-</div>
        <div class="cart__item__quantity__counter">${item.quantity}</div>
        <div class="cart__item__quantity__plus">+</div>
      </div>
        `;
        card.innerHTML = code;
        result.push(card)
    })



    return result
}