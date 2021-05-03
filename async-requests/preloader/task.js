'use strict';
const myStorage = window.localStorage;          //Создание и проверка не пустого стораджа
if (myStorage.length > 0) {
    let preloader = document.getElementById('loader');
    preloader.className = 'loader';
    let itemCode = document.getElementById('items');

    for (let [key, value] of Object.entries(myStorage)) {
        let item = createItem(key, value, 'руб.');
        itemCode.appendChild(item);
    }
}

const requestStocks = new XMLHttpRequest();
requestStocks.open('GET', 'https://netology-slow-rest.herokuapp.com');
requestStocks.responseType = 'json';
requestStocks.send();
requestStocks.onload = function () {
    if (requestStocks.status === 200) {
        const preloader = document.getElementById('loader');   //Скрываем прелоадер
        preloader.className = 'loader';
        const itemCode = document.getElementById('items');      //Очищаем значения из Storage
        itemCode.innerHTML = '';

        const responseObj = requestStocks.response;                       //Получаем ответ и создаем айтемы
        const valutes = responseObj.response.Valute;
        for (let key in valutes) {
            const valute = valutes[key];
            const item = createItem(valute.CharCode, valute.Value, 'руб.');
            itemCode.appendChild(item);
            myStorage.setItem(valute.CharCode, valute.Value);
        }
    } else {
        alert('Ошибка!');
    }

};

function createItem(code, value, currency) {
    const wrapper = document.createElement('div');
    wrapper.className = 'item';

    const codeEl = document.createElement('div');
    codeEl.className = 'item__code';
    codeEl.innerHTML = code;

    const valueEl = document.createElement('div');
    valueEl.className = 'item__value';
    valueEl.innerHTML = value;

    const currencyEl = document.createElement('div');
    currencyEl.className = 'item__currency';
    currencyEl.innerHTML = currency;

    wrapper.appendChild(codeEl);
    wrapper.appendChild(valueEl);
    wrapper.appendChild(currencyEl);


    return wrapper;
}
