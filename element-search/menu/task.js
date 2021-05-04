'use strict';
const menuItem = document.getElementsByClassName('menu__item');
const arrMenuItem = Array.from(menuItem);

for (let i = 0; i < arrMenuItem.length; i++) {
    arrMenuItem[i].getElementsByClassName('menu__link')[0].onclick = function (event) {
        const menuActive = document.getElementsByClassName('menu_active');
        const arrmenuActive = Array.from(menuActive);
        const subMenu = arrMenuItem[i].querySelector('ul');
        if (subMenu) {
            event.preventDefault();
            subMenu.classList.toggle('menu_active');
        }
        if (arrmenuActive.length > 0) {
            arrmenuActive[0].classList.remove('menu_active');
        }
    }
}