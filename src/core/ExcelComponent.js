// ==================================================================
// ExcelComponent наследуемся от DomListener
// ==================================================================

// ExcelComponent - конкретика, где мы будем определять шаблон
// для будущего компонента, непосредственно - функционал компонента
// toHTML() - возвращает шаблон компонента

// toHTML() - абстрактный, базовый метод, который будет определен
// для каждого инстанса классов Header, Toolbar, Formula, Table и по
// умолчанию будет возвращать пустую строку, но в каждой конкретной реализации
// компонента будет возвращать свой собственный шаблон

/* eslint-disable require-jsdoc */
import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}

// Задача class ExcelComponent - вернуть шаблон компонента
// Каждая конкретная реализация Header, Toolbar, Formula, Table
// будет возвращать собственный шаблон
// Header, Toolbar, Formula, Table - по умолчанию имеют метод
// toHTML(), который возвращает шаблон компонента