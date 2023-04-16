// =============================================================
// Компонент Header
// =============================================================

// Компонент Header - конкретный компонент приложения, поетому мы
// его наследуем от ExcelComponent

import {ExcelComponent} from '../../core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Header extends ExcelComponent {
  static className = 'excel__header';
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `
      <input class="input" type="text" value="Новая таблица">
      <div>
        <div class="button">
          <i class="material-symbols-outlined">exit_to_app</i>
        </div>
        <div class="button">
          <i class="material-symbols-outlined">delete</i>
        </div>
      </div>
    `;
  }
}

// Для каждого класса корневым элементом является <div>, например
// для Header <div class="excel__header"> с классом class="excel__header"
// Статическое поле static className = 'excel__header' создается для
// того, чтобы иметь доступ к этому полю не создавая инстанс данного
// класса, и этот класс будет являться корневым классом для данного
// блока