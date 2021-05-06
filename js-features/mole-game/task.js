'use strict';
const deadMoll = document.getElementById('dead');
const missMoll = document.getElementById('lost');
const hole = document.getElementsByClassName('hole');
const arrHole = Array.from(hole);
let killMole = 0;
let miss = 0;

for (let i = 0; i < arrHole.length; i++) {
    arrHole[i].onclick = function () {
        const hasMole = getHole(i+1).classList.contains('hole_has-mole');
        if (hasMole) {
            killMole++;
            deadMoll.textContent = killMole;
            if (killMole > 9) {
                alert('You Win');
                restartGame();
            }

        } else {
            miss++;
            missMoll.textContent = miss;
            if (miss > 4) {
                alert('Game Over');
                restartGame();
            }
        }
    }
}

function getHole (index) {
    return document.getElementById(`hole${index}`);
}

function restartGame () {
    killMole = 0;
    miss = 0;
    deadMoll.textContent = String(killMole);
    missMoll.textContent = String(miss);
}