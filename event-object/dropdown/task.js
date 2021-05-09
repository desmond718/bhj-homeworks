'use strict';
const dropDownValueHTML = document.getElementsByClassName('dropdown__value');
const dropDownValue = Array.from(dropDownValueHTML);

const dropDownListHTML = document.getElementsByClassName('dropdown__list');
const listMenu = Array.from(dropDownListHTML);

const dropItemHTML = document.getElementsByClassName('dropdown__item');
const dropItem = Array.from(dropItemHTML);

const link = document.getElementsByClassName('dropdown__link');
const arrLink = Array.from(link);

dropDownValue[0].addEventListener('click', () => {
    listMenu[0].classList.toggle('dropdown__list_active');
})

for (let item of arrLink) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
    })
}

for (let item of dropItem) {
    console.log(item);
    item.addEventListener('click', () => {
        listMenu[0].classList.remove('dropdown__list_active');
        dropDownValue[0].textContent = item.textContent;
    })
}
