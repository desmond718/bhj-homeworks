'use strict';
const book = document.getElementById('book');
const fontSize = Array.from(document.querySelectorAll('.book__control_font-size > a'));
const textColor = Array.from(document.querySelectorAll('.book__control_color > a'));
const bgColor = Array.from(document.querySelectorAll('.book__control_background > a'));

for (let item of fontSize) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const fontSizeActive = Array.from(document.getElementsByClassName('font-size_active'));
        book.classList.remove('font-size_small', 'font-size_big');   //Возвращаем дефолтное значение класса Book

        if (fontSizeActive.length > 0) {       //Удаляем предыдущий активный класс Font Size
            fontSizeActive[0].classList.remove('font-size_active');
        }

        item.classList.add('font-size_active');     //Добавляем новый активный класс

        if (item.classList.contains('font-size_small')) {
            book.classList.add('font-size_small');
        }

        if (item.classList.contains('font-size_big')) {
            book.classList.add('font-size_big');
        }
    });
}

for (let item of textColor) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const colorActive = Array.from(document.querySelectorAll('.book__control_color > .color_active'));
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        if (colorActive.length > 0) {
            colorActive[0].classList.remove('color_active');
        }

        item.classList.add('color_active');

        if (item.classList.contains('text_color_black')) {
            book.classList.add('book_color-black');
        }

        if (item.classList.contains('text_color_gray')) {
            book.classList.add('book_color-gray');
        }

        if (item.classList.contains('text_color_whitesmoke')) {
            book.classList.add('book_color-whitesmoke');
        }
        console.log(book);
    });
}

for (let item of bgColor) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const bgActive = Array.from(document.getElementsByClassName('color_active'));
        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

        if (bgActive.length > 0) {
            bgActive[0].classList.remove('color_active');
        }

        item.classList.add('color_active');

        if (item.classList.contains('bg_color_black')) {
            book.classList.add('book_bg-black');
        }

        if (item.classList.contains('bg_color_gray')) {
            book.classList.add('book_bg-gray');
        }

        if (item.classList.contains('bg_color_white')) {
            book.classList.add('book_bg-white');
        }
    });
}