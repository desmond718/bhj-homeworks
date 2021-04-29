'use strict';
const xhrPoll = new XMLHttpRequest();
xhrPoll.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhrPoll.responseType = 'json';
xhrPoll.send();
xhrPoll.onload = function() {
    if (xhrPoll.status === 200) {
        const responseObj = xhrPoll.response;
        console.log(responseObj);
        const pollTitle = document.getElementById('poll__title');
        pollTitle.textContent = responseObj.data.title;

        const pollAnswers = document.getElementById('poll__answers');
        const answers = responseObj.data.answers;
        for (let i = 0; i < answers.length; i++) {
            const button = createButtonAnswer(answers[i]);
            button.onclick = function () {
                sendAnswerResponse(responseObj.id, i);
                alert('Спасибо, ваш голос засчитан!');
            }
            pollAnswers.appendChild(button);
        }
    } else {
        alert('Ошибка загрузки');
    }
};

function createButtonAnswer(value) {
    const buttonAnswer = document.createElement('button');
    buttonAnswer.className = 'poll__answer';
    buttonAnswer.textContent = value;
    return buttonAnswer;
}

function sendAnswerResponse(voteId, answerId) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('vote=' + voteId + '&answer=' + answerId);
    xhr.onload = function () {
        const responseObj = JSON.parse(xhr.response);
        console.log(responseObj);
        const pollAnswer = document.getElementById('poll__answers');
        pollAnswer.className = 'poll__answers';
        const pollAnswers = document.getElementById('poll__answers');
        const stats = responseObj.stat;
        const totalAnswer = totalAnswers(stats);
        for (let i = 0; i < stats.length; i++) {
            let percent = stats[i].votes * 100 / totalAnswer;
            const answer = createPollAnswer(stats[i].answer, percent.toFixed(2));
            document.body.appendChild(answer);
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

function createPollAnswer(answer, percent) {
    const resultAnswer = document.createElement('div');
    resultAnswer.textContent = answer + ': ' + percent + '%';
    return resultAnswer;
}