'use strict';
const preloader = document.getElementById('loader');
const listItem = document.getElementById('items');

const myStorage = window.localStorage;
let storageObj = {};
if (myStorage.length > 0) {
    const parseLocalStorage = JSON.parse(myStorage.getItem('valute'));
    storageObj = parseLocalStorage;
    preloader.classList.remove('loader_active');

    for (let key in storageObj) {
        const charCode = storageObj[key].CharCode;
        const value = storageObj[key].Value;
        const item = createItemValute(charCode, value);
        listItem.appendChild(item);
    }
}


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
    if (xhr.readyState  === xhr.DONE && xhr.status === 200) {

        const responseObj = xhr.response;
        const valuteObj = responseObj.response.Valute;
        storageObj = valuteObj;
        console.log(responseObj);

        myStorage.setItem('valute', JSON.stringify(storageObj));

        preloader.classList.remove('loader_active');
        listItem.innerHTML = '';

        for (let key in valuteObj) {
            const charCode = valuteObj[key].CharCode;
            const value = valuteObj[key].Value;
            const item = createItemValute(charCode, value);
            listItem.appendChild(item);
        }
    } else {
        alert('Ошибка загрузки данных');
    }
};

function createItemValute (charCode, value) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = charCode;

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = value;

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб.';

    itemElement.appendChild(itemCode);
    itemElement.appendChild(itemValue);
    itemElement.appendChild(itemCurrency);

    return itemElement;
}