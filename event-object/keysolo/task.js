class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.symbol = container.getElementsByClassName('symbol');
    this.timerClass = container.querySelector('.status__timer');
    this.timer = 0;

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    clearInterval(this.timer);
    this.setTimer();
  }

  setTimer() {
    let timerLength = this.symbol.length;
    this.timerClass.textContent = timerLength;
    this.timer = setInterval(() => {
      timerLength--;
      this.timerClass.textContent = timerLength;
      if (timerLength === 0) {
        alert('Вы проиграли!');
        this.reset();
      }
    },1000);
  }

  registerEvents() {
        const keyUp = document.addEventListener('keyup', (event) => {
          const pressKey = event.key.toLowerCase();
          const currentSymbol = this.currentSymbol.textContent;
          if (currentSymbol === pressKey) {
            this.success();
          } else {
            this.fail();
          }
        });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    clearInterval(this.timer);
    this.setTimer();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

