const buttonsObj = {

  // первая строка клавиатуры
  Backquote: {
    key: { base: { en: '`', ru: 'ё' }, additional: { en: '~', ru: 'Ё' } },
    type: 'print',
  },

  Digit1: {
    key: { base: { en: '1', ru: '1' }, additional: { en: '!', ru: '!' } },
    type: 'print',
  },

  Digit2: {
    key: { base: { en: '2', ru: '2' }, additional: { en: '@', ru: '"' } },
    type: 'print',
  },

  Digit3: {
    key: { base: { en: '3', ru: '3' }, additional: { en: '#', ru: '№' } },
    type: 'print',
  },

  Digit4: {
    key: { base: { en: '4', ru: '4' }, additional: { en: '$', ru: ';' } },
    type: 'print',
  },

  Digit5: {
    key: { base: { en: '5', ru: '5' }, additional: { en: '%', ru: '%' } },
    type: 'print',
  },

  Digit6: {
    key: { base: { en: '6', ru: '6' }, additional: { en: '^', ru: ':' } },
    type: 'print',
  },

  Digit7: {
    key: { base: { en: '7', ru: '7' }, additional: { en: '&', ru: '?' } },
    type: 'print',
  },

  Digit8: {
    key: { base: { en: '8', ru: '8' }, additional: { en: '*', ru: '*' } },
    type: 'print',
  },

  Digit9: {
    key: { base: { en: '9', ru: '9' }, additional: { en: '(', ru: '(' } },
    type: 'print',
  },

  Digit0: {
    key: { base: { en: '0', ru: '0' }, additional: { en: ')', ru: ')' } },
    type: 'print',
  },

  Minus: {
    key: { base: { en: '-', ru: '-' }, additional: { en: '_', ru: '_' } },
    type: 'print',
  },

  Equal: {
    key: { base: { en: '=', ru: '=' }, additional: { en: '+', ru: '+' } },
    type: 'print',
  },

  Backspace: {
    key: { base: { en: 'Backspace', ru: 'Backspace' }, additional: { en: 'Backspace', ru: 'Backspace' } },
    type: 'func-large',
  },

  // вторая строка клавиатуры
  Tab: {
    key: { base: { en: 'Tab', ru: 'Tab' }, additional: { en: 'Tab', ru: 'Tab' } },
    type: 'func-medium',
  },

  KeyQ: {
    key: { base: { en: 'q', ru: 'й' }, additional: { en: 'Q', ru: 'Й' } },
    type: 'print',
  },

  KeyW: {
    key: { base: { en: 'w', ru: 'ц' }, additional: { en: 'W', ru: 'Ц' } },
    type: 'print',
  },

  KeyE: {
    key: { base: { en: 'e', ru: 'у' }, additional: { en: 'E', ru: 'У' } },
    type: 'print',
  },

  KeyR: {
    key: { base: { en: 'r', ru: 'к' }, additional: { en: 'R', ru: 'К' } },
    type: 'print',
  },

  KeyT: {
    key: { base: { en: 't', ru: 'е' }, additional: { en: 'T', ru: 'Е' } },
    type: 'print',
  },

  KeyY: {
    key: { base: { en: 'y', ru: 'н' }, additional: { en: 'Y', ru: 'Н' } },
    type: 'print',
  },

  KeyU: {
    key: { base: { en: 'u', ru: 'г' }, additional: { en: 'U', ru: 'Г' } },
    type: 'print',
  },

  KeyI: {
    key: { base: { en: 'i', ru: 'ш' }, additional: { en: 'I', ru: 'Ш' } },
    type: 'print',
  },

  KeyO: {
    key: { base: { en: 'o', ru: 'щ' }, additional: { en: 'O', ru: 'Щ' } },
    type: 'print',
  },

  KeyP: {
    key: { base: { en: 'p', ru: 'з' }, additional: { en: 'P', ru: 'З' } },
    type: 'print',
  },

  BracketLeft: {
    key: { base: { en: '[', ru: 'х' }, additional: { en: '{', ru: 'Х' } },
    type: 'print',
  },

  BracketRight: {
    key: { base: { en: ']', ru: 'ъ' }, additional: { en: '}', ru: 'Ъ' } },
    type: 'print',
  },

  Delete: {
    key: { base: { en: 'Delete', ru: 'Delete' }, additional: { en: 'Delete', ru: 'Delete' } },
    type: 'func',
  },

  // третья строка клавиатуры
  CapsLock: {
    key: { base: { en: 'CapsLock', ru: 'CapsLock' }, additional: { en: 'CapsLock', ru: 'CapsLock' } },
    type: 'func-large',
  },

  KeyA: {
    key: { base: { en: 'a', ru: 'ф' }, additional: { en: 'A', ru: 'Ф' } },
    type: 'print',
  },

  KeyS: {
    key: { base: { en: 's', ru: 'ы' }, additional: { en: 'S', ru: 'Ы' } },
    type: 'print',
  },

  KeyD: {
    key: { base: { en: 'd', ru: 'в' }, additional: { en: 'D', ru: 'В' } },
    type: 'print',
  },

  KeyF: {
    key: { base: { en: 'f', ru: 'а' }, additional: { en: 'F', ru: 'А' } },
    type: 'print',
  },

  KeyG: {
    key: { base: { en: 'g', ru: 'п' }, additional: { en: 'G', ru: 'П' } },
    type: 'print',
  },

  KeyH: {
    key: { base: { en: 'h', ru: 'р' }, additional: { en: 'H', ru: 'Р' } },
    type: 'print',
  },

  KeyJ: {
    key: { base: { en: 'j', ru: 'о' }, additional: { en: 'J', ru: 'О' } },
    type: 'print',
  },

  KeyK: {
    key: { base: { en: 'k', ru: 'л' }, additional: { en: 'K', ru: 'Л' } },
    type: 'print',
  },

  KeyL: {
    key: { base: { en: 'l', ru: 'д' }, additional: { en: 'L', ru: 'Д' } },
    type: 'print',
  },

  Semicolon: {
    key: { base: { en: ';', ru: 'ж' }, additional: { en: ':', ru: 'Ж' } },
    type: 'print',
  },

  Quote: {
    key: { base: { en: "'", ru: 'э' }, additional: { en: '"', ru: 'Э' } },
    type: 'print',
  },

  Enter: {
    key: { base: { en: 'Enter', ru: 'Enter' }, additional: { en: 'Enter', ru: 'Enter' } },
    type: 'func-large',
  },

  // четвёртая строка клавиатуры
  ShiftLeft: {
    key: { base: { en: 'Shift', ru: 'Shift' }, additional: { en: 'Shift', ru: 'Shift' } },
    type: 'func-medium',
  },

  IntlBackslash: {
    key: { base: { en: '\\', ru: '\\' }, additional: { en: '|', ru: '/' } },
    type: 'print',
  },

  KeyZ: {
    key: { base: { en: 'z', ru: 'я' }, additional: { en: 'Z', ru: 'Я' } },
    type: 'print',
  },

  KeyX: {
    key: { base: { en: 'x', ru: 'ч' }, additional: { en: 'X', ru: 'Ч' } },
    type: 'print',
  },

  KeyC: {
    key: { base: { en: 'c', ru: 'с' }, additional: { en: 'C', ru: 'С' } },
    type: 'print',
  },

  KeyV: {
    key: { base: { en: 'v', ru: 'м' }, additional: { en: 'V', ru: 'М' } },
    type: 'print',
  },

  KeyB: {
    key: { base: { en: 'b', ru: 'и' }, additional: { en: 'B', ru: 'И' } },
    type: 'print',
  },

  KeyN: {
    key: { base: { en: 'n', ru: 'т' }, additional: { en: 'N', ru: 'Т' } },
    type: 'print',
  },

  KeyM: {
    key: { base: { en: 'm', ru: 'ь' }, additional: { en: 'M', ru: 'Ь' } },
    type: 'print',
  },

  Comma: {
    key: { base: { en: ',', ru: 'б' }, additional: { en: '<', ru: 'Б' } },
    type: 'print',
  },

  Period: {
    key: { base: { en: '.', ru: 'ю' }, additional: { en: '>', ru: 'Ю' } },
    type: 'print',
  },

  Slash: {
    key: { base: { en: '/', ru: '.' }, additional: { en: '?', ru: ',' } },
    type: 'print',
  },

  ShiftRight: {
    key: { base: { en: 'Shift', ru: 'Shift' }, additional: { en: 'Shift', ru: 'Shift' } },
    type: 'func',
  },

  ArrowUp: {
    key: { base: { en: '△', ru: '△' }, additional: { en: '△', ru: '△' } },
    type: 'print',
  },

  // пятая строка клавиатуры
  ControlLeft: {
    key: { base: { en: 'Ctrl', ru: 'Ctrl' }, additional: { en: 'Ctrl', ru: 'Ctrl' } },
    type: 'func',
  },

  MetaLeft: {
    key: { base: { en: 'Meta', ru: 'Meta' }, additional: { en: 'Meta', ru: 'Meta' } },
    type: 'func',
  },

  AltLeft: {
    key: { base: { en: 'Alt', ru: 'Alt' }, additional: { en: 'Alt', ru: 'Alt' } },
    type: 'func',
  },

  Space: {
    key: { base: { en: ' ', ru: ' ' }, additional: { en: ' ', ru: ' ' } },
    type: 'print-space',
  },

  AltRight: {
    key: { base: { en: 'Alt', ru: 'Alt' }, additional: { en: 'Alt', ru: 'Alt' } },
    type: 'func',
  },

  ControlRight: {
    key: { base: { en: 'Ctrl', ru: 'Ctrl' }, additional: { en: 'Ctrl', ru: 'Ctrl' } },
    type: 'func',
  },

  ArrowLeft: {
    key: { base: { en: '◁', ru: '◁' }, additional: { en: '◁', ru: '◁' } },
    type: 'print',
  },

  ArrowDown: {
    key: { base: { en: '▽', ru: '▽' }, additional: { en: '▽', ru: '▽' } },
    type: 'print',
  },

  ArrowRight: {
    key: { base: { en: '▷', ru: '▷' }, additional: { en: '▷', ru: '▷' } },
    type: 'print',
  },

};

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
