'use strict';
const openChat = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const inputChat = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const scrollChat = document.querySelector('.chat-widget__messages-container');

//Открытие чата
openChat.addEventListener('click', () => {
  chatWidget.classList.toggle('chat-widget_active');
  setTimeout(questionFromRobot, 30000);
});

// Навешиваем ивент на отправку сообщения пользователем
inputChat.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {

    //блокируем отправку пустого сообщения
    if (inputChat.value.trim() === '') {
      return
    }

    //Печать сообщения пользователя
    printUserMessage();

    //Печать сообщения чатом роботом
    printRobotMessage(answerChat.answer);

    //Чистим инпут после отправки сообщения
    inputChat.value = null;

    clearTimeout(questionFromRobot);
    setTimeout(questionFromRobot, 30000);
    scrollChat.scrollTop = scrollChat.scrollHeight;
    console.log(scrollChat.scrollHeight);
  }
});

//Функция для случайной генерации ответа
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Вопрос от робота если пользователь бездействует
function questionFromRobot () {
  let questionArray = [];

  if (chatWidget.classList.contains('chat-widget_active')) {
    answerChat.answer.forEach( (item) => {
      if (item.includes('?')) {
        questionArray.push(item);
      }
    })
  }
  printRobotMessage(questionArray);
}

function printRobotMessage (message) {
  const robotRandomMessage = message[getRandomInt(message.length)];
  messages.innerHTML += `
        <div class="message">
            <div class="message__time">${getTimeNow()}</div>
            <div class="message__text">${robotRandomMessage}</div>
        </div>
    `;
}

function printUserMessage () {
  messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${getTimeNow()}</div>
            <div class="message__text">${inputChat.value}</div>
        </div>
    `;
}

function getTimeNow () {
  const date = new Date();
  const nowDate = date.getHours() + ':' + date.getMinutes();
  return nowDate;
}

//Список ответов от робота чата
const answerChat = {
  answer: ['Где ваша совесть?', 'Добрый день! До свидания', 'Вы не купили ни единого товара, чтобы так разговаривать', 'Мы ничего не будем вам продавать', 'К сожалению все операторы сейчас заняты', 'Кто тут?', 'Мы ничего вам продавать не будем!']
};
