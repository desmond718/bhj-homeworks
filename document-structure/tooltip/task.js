'use strict';
const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));


hasTooltip.forEach(item => {

    //Создаем и наполняем элемент элемент
    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = item.title;

    //Получаем координаты и устанавливаем позицию тултипа
    let coords = item.getBoundingClientRect();
    tooltip.style.left = coords.left + 'px';

    //Не готово
    tooltip.dataset.position = 'top';

    //Добавляем элемент
    item.insertAdjacentElement('afterend', tooltip);

    // На клик отображает или скрывает элемент
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active');
        }
    });
});