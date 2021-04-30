'use strict';
const progress = document.getElementById( 'progress' );
const fileUploader = document.getElementById( 'progress' );
const form = document.getElementById( 'form' );
form.onsubmit = function upload (event) {
    event.preventDefault();

    const input  = document.querySelector('input');
    const file = input.files[0];

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    // xhr.onprogress = function (event) {                              // Не работает так как в event.total приходит 0
    //     //progress.value = event.loaded / event.total * 100;
    //     console.log(event)
    // }
    xhr.onload = xhr.onerror = function() {
        console.log(this.status)
        if (this.status === 200) {
            alert('Success');
        } else {
            alert('Error');
        }
    }
    console.log('file', file)
    xhr.send(formData)
}

