'use strict';
const product = Array.from(document.getElementsByClassName('product'));
const cartProducts = document.querySelector('.cart__products');

const myStorage = window.localStorage;

product.forEach( (item) => {
    productQuantityControl(item);
    addProductInCart(cartProducts, item);
})

//Управление контролами на карточке продукта
function productQuantityControl (prod) {
    const inc = prod.querySelector('.product__quantity-control_inc');
    const dec = prod.querySelector('.product__quantity-control_dec');
    const count = prod.querySelector('.product__quantity-value');

    inc.addEventListener('click', () => {
        count.textContent = +count.textContent + 1;
    })

    dec.addEventListener('click', () => {
        if (+count.textContent < 1) {
            return null
        }

        count.textContent = +count.textContent - 1;
    })
}

//Добавление карточки в корзину и проверка на существующий товар в корзине
function addProductInCart (cartProducts, product) {

    //Находим кнопку добавления в корзину
    const addProductButton = product.querySelector('.product__add');
    addProductButton.addEventListener('click', () => {

        //Проверка на существующий товар в корзине
        const cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product'));
        let productIncludes = false;
        cartProduct.forEach( (item) => {
            if (item.dataset.id === product.dataset.id) {
                let cartCountProduct2 = item.querySelector('.cart__product-count').textContent;
                let productCount = product.querySelector('.product__quantity-value').textContent;
                item.querySelector('.cart__product-count').textContent = +cartCountProduct2 + +productCount;
                productIncludes = true;
            }
        });

        //Если товар не найден в корзине, то добавляем его в корзину
        if (!productIncludes) {
            createNewProduct(cartProducts, product);
        }
    });
}

//Создает карточку продукта в корзине
function createNewProduct (cartProducts, product) {
    const elementCart = document.createElement('div');
    elementCart.className = 'cart__product';
    elementCart.dataset.id = product.dataset.id;

    const imageElementCart = document.createElement('img');
    imageElementCart.className = 'cart__product-image';
    imageElementCart.src = product.querySelector('.product__image').src;

    const cartCountProduct = document.createElement('div');
    cartCountProduct.className = 'cart__product-count';
    cartCountProduct.textContent = product.querySelector('.product__quantity-value').textContent;

    elementCart.insertAdjacentElement('afterbegin', cartCountProduct);
    elementCart.insertAdjacentElement('afterbegin', imageElementCart);
    cartProducts.insertAdjacentElement('afterbegin', elementCart);
}