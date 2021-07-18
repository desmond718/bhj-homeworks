'use strict';
const inputText = document.getElementById('task__input');
const submit = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

//Создлаем сторадж
const myStorage = window.localStorage;
const storageObj = {message: []};

//Печатаем сообщения из стораджа если он не пустой
if (myStorage.length !== 0) {
    const messageStorage = JSON.parse(myStorage.getItem('message')).message;
    for (let i = 0; i < messageStorage.length; i++) {
        printUserToDo(taskList, messageStorage[i]);
        storageObj.message.push(messageStorage[i]);
    }
}

//Отправка формы
form.addEventListener('submit', () => {
    if (inputText.value.trim() === '') {
        return
    }

    //записывааем значение в объект для стораджа
    storageObj.message.push(inputText.value);

    //Обновляем сторадж
    updateStorageMessages(storageObj);

    //Печать задачи
    printUserToDo(taskList, inputText.value);

    //Чистка строки ввода
    inputText.value = null;
})

function printUserToDo (list, message) {
    list.innerHTML += `
        <div class="task">
  <div class="task__title">
    ${message}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>
    `;

    //Добавляем удалдение сообщениям
    deleteTask(taskList, storageObj);
}

//На вход подается DOM со списком задач и объект с массивом сообщений
function deleteTask (listTask, storageObject) {
    const removeTask = Array.from(listTask.getElementsByClassName('task'));
    for (let i = 0; i < removeTask.length; i++) {
        removeTask[i].childNodes[3].addEventListener('click', (e) => {
            removeTask[i].remove();
            storageObject.message.splice(i,1);

            updateStorageMessages(storageObject);

            location.reload();
        })
    }
}

//Обновление стораджа после внесения изменений в объект сообщений
function updateStorageMessages (objectForStorage) {
    const obj = JSON.stringify(objectForStorage);
    myStorage.setItem('message', obj);
}