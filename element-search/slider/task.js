'use strict';
const sliderItem = document.getElementsByClassName('slider__item');
const arrSlider = Array.from(sliderItem);

const prevArrow = document.getElementsByClassName('slider__arrow_prev');
const arrPrev = Array.from(prevArrow);

const nextArrow = document.getElementsByClassName('slider__arrow_next');
const arrNext = Array.from(nextArrow);

const sliderDot = document.getElementsByClassName('slider__dot');
const arrSliderDot = Array.from(sliderDot);

const dotActive = document.getElementsByClassName('slider__dot_active');
const arrDotActive = Array.from(dotActive);

let activeSlider = document.getElementsByClassName('slider__item_active');
let counter = 0;


arrNext[0].onclick = function () {
    if (activeSlider) {
        removeActiveState();
        counter++;
        if (counter >= arrSlider.length) {
            counter = 0;
        }
        addActiveState();
        }
}

arrPrev[0].onclick = function () {
    if (activeSlider) {
        removeActiveState();
        counter--;
        if (counter < 0) {
            counter = arrSlider.length - 1;
        }
        addActiveState();
    }
}

for (let i = 0; i < arrSliderDot.length; i++) {
    arrSliderDot[i].onclick = function () {
        if (activeSlider) {
            removeActiveState();
        }
        counter = i;
        if (arrDotActive.length > 0) {
            arrDotActive[0].classList.remove('slider__dot_active');
        }
       addActiveState();
    }
}

function removeActiveState() {
    arrSlider[counter].classList.remove('slider__item_active');
    arrSliderDot[counter].classList.remove('slider__dot_active');
}
function addActiveState() {
    arrSlider[counter].classList.add('slider__item_active');
    arrSliderDot[counter].classList.add('slider__dot_active');
}

