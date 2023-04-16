import {ExcelComponent} from '../../core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  // eslint-disable-next-line require-jsdoc
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `
      <div class="formula-info">fx</div>
      <div class="formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  // eslint-disable-next-line require-jsdoc
  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  // eslint-disable-next-line require-jsdoc
  onClick() {
    console.log('onClick');
  }
}

// static className = 'excel__formula'; - статическое поле
// которое принимает в себя css класс 'excel__formula' коневого
// элемента <div>
// статическое поле - потому что мы будем иметь к нему доступ
// без создания экземпляра класса
// это будет корневой css класс для данного блока

// здесь мы имеем доступ к переменной this.$root, тк ExcelComponent
// наследуется от DomListener

// кейс, когда в onInput(event) мы хотим получить this.$root, просто
// так мы получим undefined, т к идет потеря контекста