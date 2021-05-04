'use strict';
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modalMain.className = 'modal modal_active';

const modalClose = document.getElementsByClassName('modal__close');
const arrModalClose = Array.from(modalClose);
for (let i = 0; i < arrModalClose.length; i++) {
    arrModalClose[i].onclick = function () {
        modalMain.className = 'modal';
        modalSuccess.className = 'modal';
    }
}

const links = document.getElementsByTagName('a');
const arrLinks = Array.from(links);
console.log(arrLinks);
arrLinks[0].onclick = function () {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active'
}