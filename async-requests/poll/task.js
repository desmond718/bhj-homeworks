'use strict';
const xhr = new XMLHttpRequest();    //Создаем запрос
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php'); //открываем соединение
xhr.responseType = 'json'; //Выбираем тип ответа
xhr.send();    //Отправляем запрос
xhr.onload = () => {

    // по событию полной загрузки делаем следующее:
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

        //Сохраняем объект ответа
        const responseObj = xhr.response;

        //Создаем тайтл опроса
        const pollTitle = document.getElementById('poll__title');
        pollTitle.className = 'poll__title';
        pollTitle.textContent = responseObj.data.title;

        //Создаем варианты ответа
        const pollAnswers = document.getElementById('poll__answers');
        const answers = responseObj.data.answers;
        for (let i = 0; i < answers.length; i++) {
            const button = createAnswerButton(answers[i]);

            button.addEventListener('click', () => {

                //Отправляем ответ обратно на сервер
                sendAnswerResponse(responseObj.id, answers[i]);
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswers.appendChild(button);
        }
    } else {
        alert('Ошибка загрузки');
    }
};

function createAnswerButton (value) {
    const buttonAnswer = document.createElement('button');
    buttonAnswer.className = 'poll__answer';
    buttonAnswer.textContent = value;
    return buttonAnswer;
}

function sendAnswerResponse (pollId, answer) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.responseType = 'json';
    xhr.send('vote=' + pollId + '&answer=' + answer);
    xhr.onload = () => {
        const responseObj = xhr.response;

        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');
        pollAnswers.className = 'poll__answers';
        const stats = responseObj.stat;

        const total = totalAnswers(stats);
        for (let i = 0; i < stats.length; i++) {
            let percent = stats[i].votes * 100 / total;
            const answers = createPollAnswer(stats[i].answer, percent.toFixed(2));
            pollTitle.appendChild(answers);
        }
    }
}

function totalAnswers (statsObj) {
    let total = 0;
    for (let i = 0; i < statsObj.length; i++) {
        total += statsObj[i].votes;
    }
    return total;
}

function createPollAnswer (answer, percent) {
    const wrapper = document.createElement('div');
    wrapper.className = 'results_poll';

    const resultAnswer = document.createElement('span');
    resultAnswer.className = 'result_poll';
    resultAnswer.textContent = answer + ': ';;

    const percentAnswer = document.createElement('span');
    percentAnswer.className = 'percent_poll';
    percentAnswer.textContent = percent + '%';

    wrapper.appendChild(resultAnswer);
    wrapper.appendChild(percentAnswer);
    return wrapper;
}