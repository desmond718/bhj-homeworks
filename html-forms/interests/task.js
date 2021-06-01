'use strict';
const checkbox = document.querySelectorAll('.interest__check');

function checkAll(dom) {
  const head = dom.querySelector('label > .interest__check');
  const status = head.checked;
  const ul = dom.querySelector('li ul');

  if (ul) {
    ul.querySelectorAll('.interest__check').forEach((input) => {
      input.checked = status;
    });
  }
}

checkbox.forEach((input) => {
  input.addEventListener('change', (e) => {
    let self = e.target;
    let li = self.closest('li');
    if (li) {
      checkAll(li);
    }
  });
});
