// =============================================================
// Компонент Excel
// =============================================================

// Excel - это не все наше приложение, а отдельный компонент
// Excel - базовый компонент, в котором регистрируются
// компоненты Header, Toolbar, Formula, Table.
// Excel будет знать как их заапендить и сформировать структуру
// шаблона

import {$} from '../../core/dom';
/* eslint-disable require-jsdoc */

// ============================== 1 ===================================
// export class Excel {
//   constructor(selector, options) {
//     this.$el = document.querySelector(selector);
//     this.components = options.components || [];
//   }

//   getRoot() {
//     const $root = document.createElement('div');
//     $root.classList.add('excel');

//     this.components.forEach((Component) => {
//       const $el = document.createElement('div');
//       $el.classList.add(Component.className);
//       const component = new Component($el);
//       $el.innerHTML = component.toHTML();
//       $root.append($el);
//     });

//     return $root;
//   }

//   render() {
//     this.$el.append(this.getRoot());
//   }
// }
// ============================== 1 ===================================

// render() - говорит что мы складываем что то в шаблон
// в методе render() мы будем создавать ноду, но эту ноду мы будем получать
// из метода getRoot()

// getRoot() - будет возвращать корневую ноду для непосредственно самого Excel
// на каждой итерации мы будем получать Component, почему Component
// с большой буквы? Потому что каждый элемент массива это
// класс конструктор, и учитывая это, мы можем создавать его инстанс
// new Component()

// мы знаем, что для каждого компонента корневым элементом
// является DomListener

// далее этому элементу добавляем css - класс, который получаем
// из статического поля, не создавая инстанс

// далее этот корневой элемент DomListener мы передаем в Component($el)
// $el.innerHTML = component.toHTML();
// для каждого гомпонента (класса) корневым элементом является div, и у
// него есть свой css-класс

// selector - строка, selector - куда монтируем
// options - что монтируем, options - обьект
// options.components - конкретно что монтируем
// components - поле обьекта
// console.log(this.$el); - <div id="app"></div>
// this.components - массив из классов, каждый элемент массива это
// класс-конструктор

// this.$el - <div id="app"></div>
// this.getRoot() - получаем ноду из метода getRoot()

// ============================== 1 ===================================


// ================================ 2 =================================
// export class Excel {
//   constructor(selector, options) {
//     this.$el = $(selector);
//     console.log(this.$el);
//     this.components = options.components || [];
//   }

//   getRoot() {
//     const $root = $.create('div', 'excel');
//     this.components.forEach((Component) => {
//       const $el = $.create('div', Component.className);
//       const component = new Component($el);
//       $el.html(component.toHTML());
//       $root.append($el);
//     });

//     return $root;
//   }

//   render() {
//     console.log(this.$el);
//     this.$el.append(this.getRoot());
//   }
// }
// ================================ 2 =================================

// ================================ 3 =================================
export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    console.log(this.$el);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // DEBUG
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    console.log(this.$el);
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
// ================================ 3 =================================