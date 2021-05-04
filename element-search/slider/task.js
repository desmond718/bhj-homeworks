'use strict';
const sliderItem = document.getElementsByClassName('slider__item');
const arrSlider = Array.from(sliderItem);


const prevArrow = document.getElementsByClassName('slider__arrow_prev');
const arrPrev = Array.from(prevArrow);

const nextArrow = document.getElementsByClassName('slider__arrow_next');
const arrNext = Array.from(nextArrow);
let counter = 0;

arrNext[0].onclick = function () {
    let activeSlider = arrSlider[counter].getElementsByClassName('slider__item_active');
    if (activeSlider) {
        arrSlider[counter].classList.remove('slider__item_active');
        counter++;
        if (counter === arrSlider.length) {
            counter = 0;
        }
        arrSlider[counter].classList.add('slider__item_active');
        }
}

arrPrev[0].onclick = function () {
    let activeSlider = arrSlider[counter].getElementsByClassName('slider__item_active');
    if (activeSlider) {
        arrSlider[counter].classList.remove('slider__item_active');
        counter--;
        if (counter < 0) {
            counter = arrSlider.length - 1;
        }
        arrSlider[counter].classList.add('slider__item_active');
    }
}

