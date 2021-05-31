'use strict';
const checkbox = Array.from(document.querySelectorAll('.interest'));
const sisCheckbox = Array.from(document.querySelectorAll('.interests_active .interest__check'));
console.log(sisCheckbox);

for (let item of checkbox) {
    item.addEventListener('change', (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            for (let item2 of sisCheckbox) {
                item2.checked = true;
            }
        } else {
            for (let item2 of sisCheckbox) {
                item2.checked = false;
            }
        }
    })
}
