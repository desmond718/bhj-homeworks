'use strict';
const inputText = document.getElementById('editor');
const clearButton = document.getElementById('clear');

const myStorage = window.localStorage;

if (myStorage.length > 0) {
    inputText.value = myStorage.getItem('text');
}

inputText.addEventListener('input', () =>{
    myStorage.setItem('text', inputText.value);
})

 clearButton.addEventListener('click', () => {
     myStorage.clear();
     inputText.value = '';
 })