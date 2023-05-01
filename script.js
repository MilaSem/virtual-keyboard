import buttonsObj from './modules/buttonsObj.js';

const english = 'en';
const russian = 'ru';
const languageInStorage = 'language'; // название ключа 'language' отображается во вкладке Приложение -> Локальное хранилище
const baseMode = 'base';
const additionalMode = 'additional';

class Keyboard {
  constructor() {
    this.lang = localStorage.getItem(languageInStorage) || english;
    this.symbolMode = baseMode;
  }

  appendButtons() {
    const fragment = document.createDocumentFragment();
    const keyNames = Object.keys(buttonsObj); // массив ключей со строковыми именами

    keyNames.forEach((item) => {
      const button = document.createElement('button');
      button.textContent = buttonsObj[item].key[this.symbolMode][this.lang];
      button.classList.add('keyboard__button');
      button.classList.add(`keyboard__button--${buttonsObj[item].type}`);
      button.dataset.code = item;
      fragment.appendChild(button);
    });

    return fragment;
  }

  changeLanguage() {
    this.lang = this.lang === english ? russian : english;
  }

  redraw() {
    const buttons = document.querySelectorAll('.keyboard__button');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].textContent = buttonsObj[buttons[i].dataset.code].key[this.symbolMode][this.lang];
    }
  }

  toggleLayout() {
    this.changeLanguage();
    this.redraw();
  }

  switchMode() {
    this.symbolMode = this.symbolMode === baseMode ? additionalMode : baseMode;
  }

  init() {
    // строим DOM
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.autofocus = 'true';
    textarea.value = '';
    container.appendChild(textarea);

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.appendChild(this.appendButtons());
    container.appendChild(keyboard);

    const note = document.createElement('div');
    note.innerHTML = '<p>Press <b>Meta</b> + <b>Space</b> to switch layouts</p><p>This keyboard was created in Windows 10</p>';
    note.classList.add('note');
    container.appendChild(note);

    // слушатель meta + space
    let toggle = false;
    document.addEventListener('keydown', (event) => {
      if (event.metaKey) {
        toggle = true;
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code === 'Space' && toggle === true) {
        this.toggleLayout();
        document.querySelector('[data-code="MetaLeft"]').classList.remove('keyboard__button--active');
        toggle = false;
      }
    });

    // анимация при нажатии клавиши на физической клавиатуре
    document.addEventListener('keydown', (event) => {
      if (event.code !== 'CapsLock') {
        document.querySelector(`[data-code='${event.code}']`).classList.add('keyboard__button--active');
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.code !== 'CapsLock') {
        document.querySelector(`[data-code='${event.code}']`).classList.remove('keyboard__button--active');
      }
    });

    // переключение режима ввода
    const caps = document.querySelector('[data-code="CapsLock"]');
    caps.addEventListener('click', () => {
      console.log('click');
      caps.classList.toggle('keyboard__button--active');
      this.switchMode();
      this.redraw();
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'CapsLock') {
        caps.classList.toggle('keyboard__button--active');
        this.switchMode();
        this.redraw();
      }
    });

    // печать в textarea мышкой и переключение раскладки
    const keys = document.querySelectorAll('.keyboard__button--print');
    keys.forEach((item) => {
      item.addEventListener('click', () => {
        console.log('click');
        textarea.value += item.textContent;
      });
    });
    const meta = document.querySelector('[data-code="MetaLeft"]');
    meta.addEventListener('click', () => {
      console.log('click meta');
      toggle = true;
    });
    const space = document.querySelector('[data-code="Space"]');
    space.addEventListener('click', () => {
      console.log('click');
      textarea.value += ' ';
      if (toggle === true) {
        this.toggleLayout();
        toggle = false;
      }
    });

    // функциональные клавиши
    const backSpace = document.querySelector('[data-code="Backspace"]');
    backSpace.addEventListener('click', () => {
      console.log('click backspace');
    });

    window.addEventListener('beforeunload', () => {
      localStorage.setItem(languageInStorage, this.lang);
    });
  }
}

const keyboard = new Keyboard();
keyboard.init();
