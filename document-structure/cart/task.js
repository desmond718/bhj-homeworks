'use strict';
const product = Array.from(document.getElementsByClassName('product'));
const cartProducts = document.querySelector('.cart__products');

const myStorage = window.localStorage;
let objForStorage = {};

if (myStorage.length !== 0) {
    const cartStorage = JSON.parse(myStorage.getItem('cart'));
        objForStorage = cartStorage;
}

product.forEach( (item) => {
    productQuantityControl(item);
    addProductInCart(cartProducts, item);

    for (let key in objForStorage) {
        if (item.dataset.id == key) {
            createCartProduct(cartProducts, item, objForStorage);
        }
    }
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

        //Проверка на существующий товар в корзине если найден, то меняем значение в корзине
        const cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product'));
        let productIncludes = false;
        cartProduct.forEach( (item) => {
            if (item.dataset.id === product.dataset.id) {
                let cartCountProduct2 = item.querySelector('.cart__product-count').textContent;
                let productCount = product.querySelector('.product__quantity-value').textContent;
                let result = item.querySelector('.cart__product-count').textContent = +cartCountProduct2 + +productCount;
                productIncludes = true;

                //Обнавляем инфу в сторадже
                objForStorage[item.dataset.id] = result;
                const obj = JSON.stringify(objForStorage);
                myStorage.setItem('cart', obj);
            }
        });

        //Если товар не найден в корзине, то добавляем его в корзину
        if (!productIncludes) {
            createCartProduct(cartProducts, product, objForStorage);
        }
    });
}

//Создает карточку продукта в корзине
function createCartProduct (cartProducts, product, storageObj) {
    //Переменная для првоерки наличия продукта в сторадже
    let includedStorage = false;

    //Создаем элемент для корзины
    const elementCart = document.createElement('div');
    elementCart.className = 'cart__product';
    elementCart.dataset.id = product.dataset.id;

    const imageElementCart = document.createElement('img');
    imageElementCart.className = 'cart__product-image';
    imageElementCart.src = product.querySelector('.product__image').src;

    const cartCountProduct = document.createElement('div');
    cartCountProduct.className = 'cart__product-count';

    //Проверка наличия элемента в сторадже
    for (let key in storageObj) {
        if (product.dataset.id == key) {
            cartCountProduct.textContent = storageObj[elementCart.dataset.id];
            includedStorage = true;
        }
    }

    //Если в сторадже нет элемента то берем значение из DOM
    if (!includedStorage) {
        cartCountProduct.textContent = product.querySelector('.product__quantity-value').textContent;
    }

    //Обнавляем информацию в сторадже
    objForStorage[elementCart.dataset.id] = +cartCountProduct.textContent;
    const obj = JSON.stringify(objForStorage);
    myStorage.setItem('cart', obj);

    //Добавление элемента в DOM
    elementCart.insertAdjacentElement('afterbegin', cartCountProduct);
    elementCart.insertAdjacentElement('afterbegin', imageElementCart);
    cartProducts.insertAdjacentElement('afterbegin', elementCart);
}