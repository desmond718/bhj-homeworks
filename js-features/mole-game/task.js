'use strict';
const hole = document.getElementsByClassName('hole');
const arrHole = Array.from(hole);
let killMole = 0;
let miss = 0;

for (let i =0; i < arrHole; i++) {
    arrHole[i].onclick = function () {
        let hasMole = arrHole[i].classList.contains('hole_has-mole');

        if (killMole > 10) {
            alert()
        }

        if (hasMole) {
            killMole++;
        } else {
            miss++;
        }
    }
}