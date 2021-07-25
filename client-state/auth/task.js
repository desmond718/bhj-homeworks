'use strict';
const singIn = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const logoutButton = document.getElementById('logout');

// Добавляем локал сторадж и првоеряем логин пользователем
const myStorage = window.localStorage;
const getUserId = myStorage.getItem('user_id');
if (getUserId) {
    welcome.classList.add('welcome_active');
    userId.textContent = getUserId;
} else {
    singIn.classList.add('signin_active');
}

//Создаем запрос на отправку формы
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.onload = () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const responseObj = xhr.response;

            //Чистим введенные данные в форму
            form.reset();

            if (responseObj.success) {
                singIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.textContent = responseObj.user_id;
                myStorage.setItem('user_id', responseObj.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }
});

//Добавляем логаут
logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    myStorage.removeItem('user_id');
    welcome.classList.remove('welcome_active');
    singIn.classList.add('signin_active');
});