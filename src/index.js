import {Excel} from './components/excel/Excel';
import {Header} from './components/header/Header';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import {Table} from './components/table/Table';
import './module';
import './scss/index.scss';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

console.log(excel);

excel.render();

// new Excel - экземпляр класса Excel
// в конструктор нам необходимо что то положить, мы ложим селектор
// корневого узла '#app'
// также в конструктор передаем набор опций
// components: [Header, Toolbar, Formula, Table - передаем набор опций
// конкретно опция - массив компонентов (регистрируем массив компонентов)
// '#app' - куда монтируем
// components: [] - что монтируем

// У нас есть четыре класса Header, Toolbar, Formula, Table
// которые отвечают за внутренние компоненты внутри Excel
// Excel - корневой компонент для текущей страницы, в
// котором необходимо зарегистрировать эти четыре компонента
// Мы можем передать эти классы в массив components в
// определенном порядке
// В массив мы передаем (перечисляем) классы (названия классов)
// не создавая экземпляры классов (в массиве перечислили классы)
// Компонент Excel знает какие компоненты в нем присутствуют и
// может начать складывать их в шаблон