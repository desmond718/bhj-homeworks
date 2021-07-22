'use strict';
const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.setRequestHeader("Content-Type", "multipart/form-data");

    const formData = new FormData(form);
    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total;
    }
    xhr.send(formData);
});