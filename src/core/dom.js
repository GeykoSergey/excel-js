// ==================================================================
// Утилита позволяющая проще взаимодействовать с DOM-деревом
// ==================================================================

// Мы можем автоматизировать создание какого либо элемента и добавление
// ему какого то класса

// мы постоянно работаем с такими нативными методами как
// document.createElement('div') и $root.classList.add('excel'); и
// из этого следует что необходимо придумать метод для того что бы это
// автоматизировать
// создаем в файле dom.js утилиту для взаимодействия с dom деревом

// любые dom ноды которые мы будем создавать будут обернуты в данный
// класс $
// когда мы будем вызывать фуекцию $() мы будем передавать selector, либо
// готовую ноду
// этот селектор мы будем передавать в класс Dom, где мы будем описывать
// весь необходимый функционал
// в конструктор мы принимаемselector, и здесь у нас есть два разных
// кейса
// первый кейс когда selector - строка, например нам необходимо получить
// div #app

// второй кейс, когда мы можем оборачивать готовые dom ноды

// делаем проверку - если селектор строка - document.querySelector(selector)
// ежели не строка то this.$el присваиваем selector

// метод html() по сути у него есть два кейса
// они могут быть как геттерами так и сеттерами
// если мы не передаем параметр в данный метод, то тогда это геттер, тоесть
// мы получаем какойто контент, если передаем - сеттер
// и если это сеттер то в последствии мы должны вернуть инстанс

// в метод html() передаем html и если он строка то this.$el.innerHTML = html;
// это мы используем как сеттер
// иначе - return this.$el.outerHTML.trim(); trim() - удаляем пробелы

// если мы занесли html - какой может быть кейз - $('div').html(<h1>Test</h1>) и
// если мы хотим сделать чейн, например добавив метод clear() -
// $('div').html(<h1>Test</h1>)/$('div').clear() и для того что бы так
// получилось в методе html() нам надо вернуть что то у которого есть
// метод clear(), но что то это и есть сам инстанс тоесть мы делаем return this;
// а учитывая что в this есть метод clear() то такая строчка
// $('div').html(<h1>Test</h1>)/$('div').clear() будет работать, это один из
// паттернов JS

// clear() вызывает метод html() с пустой строкой, таким образом очистим html


/* eslint-disable require-jsdoc */
class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
    document.querySelector(selector) :
    selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }
  // eventType это строка содержащая насвание события, callback -
  // функция которая выполняется
  // в данном случае this.$el - это нативный элемент

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}

// append() - типа полифил

// для того что бы каждый раз не писать new Dom() и т д мы будем экспортировать
// функцию export function $(selector)
// class Dom мы не експортируем

// При вызове функции $() мы будем возвращать новый инстанс new Dom()

export function $(selector) {
  return new Dom(selector);
}

// Для функции $() создаем статический метод $.create()
// В данный метод будем принимать имя тега и название класса тега

$.create = (tagName, classes = '') => {
  // Создаем елемент Html
  const el = document.createElement(tagName);
  // Проверяем, если есть классы (отличны от пустой строки или false-значения),
  // то добавляем их к тегу
  if (classes) {
    el.classList.add(classes);
  }
  // Возвращаем Html элемент
  return $(el);
};