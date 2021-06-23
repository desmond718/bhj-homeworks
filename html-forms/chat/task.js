'use strict';
const openChat = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const inputChat = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');


openChat.addEventListener('click', () => {     //Открытие чата
  chatWidget.classList.toggle('chat-widget_active');
});

inputChat.addEventListener('keydown', (event) => {  // Отправка сообщения пользователем
  if (event.key === 'Enter') {

    if (inputChat.value === '') {     //блокируем отправку пустого сообщения
      return
    }

    const date = new Date();
    const nowDate = date.getHours() + ':' + date.getMinutes();
    messages.innerHTML += `
    <div class="message message_client">
                            <div class="message__time">${nowDate}</div>
                            <div class="message__text">${inputChat.value}</div>
                        </div>
    `;
    inputChat.value = null;   //Чистим инпут после отправки сообщения


  }
})