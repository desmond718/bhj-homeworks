'use strict';
const modalWindow = document.getElementById('subscribe-modal');
const closeModal = document.getElementsByClassName('modal__close')[0];

const isCloseModal = getCookie('isCloseModal');
if (!isCloseModal) {
    modalWindow.classList.add('modal_active');
}


closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('modal_active');
    document.cookie = 'isCloseModal=true';
    console.log(document.cookie);
})

function getCookie (key) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find((c) => c.startsWith(key + '='));

    return cookie ? cookie.substr((key + '=').length) : null
}

