// ==================================================================
// DomListener - абстрактный класс
// ==================================================================

import {capitalize} from './utils';

/* eslint-disable require-jsdoc */
export class DomListener {
  constructor($root, listeners = []) {
    // eslint-disable-next-line no-empty
    if (!$root) {
      throw new Error('No $root provided for DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      const name = this.name || '';
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        );
      }
      this[method] = this[method].bind(this);
      // console.log(method);
      this.$root.on(listener, this[method]);
      // здесь мы обращаемся к this.$root несмотря на то что мы находимся в
      // callback функции, мы так делаем, потому что стрелочная функция не
      // создает своего собственного контекста
      // this.$root в данном случае это инстанс класса Dom, нашей абстрактной
      // оболочки над нативными элементами, и у него нет такого элемента как
      // addEventListener но мы его можем добавить в методе on() в классе Dom
    });
  }
  // this.$root

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.of(listener, this[method]);
    });
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

// DomListener - базовый класс, который позволяет добавлять и
// удалять слушатели

// Когда мы будем работать с DomListener мы будем добавлять
// изолированые события для какого то элемента который
// наследуется от этого класса

// $root - корневой элемент на который мы будем вешать различные
// слушатели

// учитывая что у нас цепочка следующая DomListener идет у нас в начале а
// ExcelComponent идет дальше, то получается что $root мы должны передавать
// из ExcelComponent

// DomListener - оперирует корневым элементом $root, для каждого компонента он
// естественно свой, и зная какое событие нам надо добавить, мы можем в
// универсальном формате его добавлять
// Далее мы добавляем универсальный domEventListener, после чего мы должны
// вызвать определенный метод, т к компоненты разные и методы должны быть
// разными.
// Мы условимся, что будем брать событие, например input, и будем его приводить
// к формату onInput
// мы будем вешать специально созданное событие, которое берет оригинальное
// название input, добавляет префикс on и пишет название с заглавной буквы
// Здесь этот метод будет описан в общем, а конкретно реализован будет в
// компоненте

// когда мы передаем метод таким образом this[method] в initDOMListeners()
// и о находиться в ключевом слове this этот метод по референсу вызывается в
// другом контексте, ключевое слово там теряется, поэтому в компоненте, например
// Formula, мы не можем получить доступ к this.$root
// Решение - зная что это метод - мы вызываем .bind(this)
// this.$root.on(listener, this[method].bind(this)); -привязываем контекст