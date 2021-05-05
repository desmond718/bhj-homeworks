'use strict';
const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('clicker__speed');
let counter = 0;


cookie.onclick = function () {

    counter++;
    clickCounter.textContent = String(counter);
    if (counter % 2) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    }
}