'use strict';
window.addEventListener('scroll', elementVision);

function elementVision () {
    const viewportHeight = window.innerHeight / 2;
    const divReveal = document.getElementsByClassName('reveal');
    for (let item of divReveal) {
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;

        if (viewportHeight > elementBottom || viewportHeight < elementTop) {
            item.classList.remove('reveal_active');
        } else {
            item.classList.add('reveal_active');
        }
    }
}
