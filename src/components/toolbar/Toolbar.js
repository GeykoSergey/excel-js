import {ExcelComponent} from '../../core/ExcelComponent';

// eslint-disable-next-line require-jsdoc
export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';
  // eslint-disable-next-line require-jsdoc
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `
      <div class="button">
        <i class="material-symbols-outlined">format_align_left</i>
      </div>
      <div class="button">
        <i class="material-symbols-outlined">format_align_center</i>
      </div>
      <div class="button">
        <i class="material-symbols-outlined">format_align_right</i>
      </div>
      <div class="button">
        <i class="material-symbols-outlined">format_bold</i>
      </div>
      <div class="button">
        <i class="material-symbols-outlined">format_italic</i>
      </div>
      <div class="button">
        <i class="material-symbols-outlined">format_underlined</i>
      </div>
    `;
  }

  // eslint-disable-next-line require-jsdoc
  onClick(event) {
    console.log(event.target);
  }
}