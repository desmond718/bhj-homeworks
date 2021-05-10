'use strict';
const tabHTML = document.getElementsByClassName('tab');
const tabArray = Array.from(tabHTML);

const tabContentHTML = document.getElementsByClassName('tab__content');
const tabContentArray = Array.from(tabContentHTML);

for (let i = 0; i < tabArray.length; i++) {
    tabArray[i].addEventListener('click', () => {
        removeActiveClass();
        tabArray[i].classList.add('tab_active');
        tabContentArray[i].classList.add('tab__content_active');
    })
}

function removeActiveClass () {
    const tabActiveHTML = document.getElementsByClassName('tab_active');
    const tabContentActiveHTML = document.getElementsByClassName('tab__content_active');
    const tabActive = Array.from(tabActiveHTML);
    const tabContentActive = Array.from(tabContentActiveHTML);

    if (tabActive.length > 0) {
        tabActive[0].classList.remove('tab_active');
    }
    if (tabContentActive.length > 0) {
        tabContentActive[0].classList.remove('tab__content_active');
    }

}