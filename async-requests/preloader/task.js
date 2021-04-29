'use strict';
const requestStocks = new XMLHttpRequest();
requestStocks.open('GET', 'https://netology-slow-rest.herokuapp.com');
requestStocks.responseType = 'json';
requestStocks.send();
requestStocks.onload = function () {
    if (requestStocks.status === 200) {
        let preloader = document.getElementById('loader');
        preloader.className = 'loader';
        let responseObj = requestStocks.response;
        let itemCode = document.getElementById('items');
        const valutes = responseObj.response.Valute;
        for (let key in valutes) {
            const valute = valutes[key];
            let item = createItem(valute.CharCode, valute.Value, 'руб.');
            itemCode.appendChild(item);
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