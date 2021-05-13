'use strict';
let counter = 1;
function changeAds () {
    const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
    const activeClass = Array.from(document.getElementsByClassName('rotator__case_active'));

    if (activeClass.length > 0) {
        activeClass[0].classList.remove('rotator__case_active');
    }

    if (counter > rotatorCase.length - 1) {
        counter = 0;
    }

    let dataColor = rotatorCase[counter].dataset.color;
    let dataSpeed = Number(rotatorCase[counter].dataset.speed);
    rotatorCase[counter].style.color = dataColor;
    rotatorCase[counter].classList.add('rotator__case_active');

    setTimeout(changeAds, dataSpeed);
    counter++;
}

setTimeout(changeAds, 1000);
