import { v4 as uuidv4 } from 'uuid';
// @types
import { BoardCardI, BoardColumnI } from '../@types/board';
// mocks
import { employeesData } from './employeesData';

export const boardPageData = {
  title: 'Проекты',
  projectTitle: 'Процессы проекта CRM - система',
  breadcrumbs: ['CRM - система', 'Процессы']
};

export const boardColumnsData: BoardColumnI[] = [
  {
    id: uuidv4(),
    key: 'backlog',
    title: 'Бэклог',
    icon: ''
  },
  {
    id: uuidv4(),
    key: 'in-progress',
    title: 'В работе',
    icon: ''
  },
  {
    id: uuidv4(),
    key: 'done',
    title: 'Выполнена',
    icon: ''
  },
  {
    id: uuidv4(),
    key: 'delivered',
    title: 'Сдана',
    icon: ''
  }
];

export const getEmptyColumnData = (): BoardColumnI => ({
  id: uuidv4() + '' + (+new Date()),
  key: 'new-' + (+new Date()),
  title: 'Без названия',
  icon: ''
});

export const boardCardsData: BoardCardI[] = [
  {
    id: `${ uuidv4() }-#20409`,
    name: 'Интерфейс динамики кадров на предприятии',
    executors: employeesData,
    priority: 5,
    status: 'backlog',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20410`,
    name: 'Ежемесячный отчёт для куратора',
    executors: employeesData,
    priority: 3,
    status: 'backlog',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20411`,
    name: 'Статистика по заявкам',
    executors: employeesData,
    priority: 4,
    status: 'backlog',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20412`,
    name: 'Заявки сгруппировать по заявкам',
    executors: employeesData,
    priority: 3,
    status: 'in-progress',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20413`,
    name: 'Ограничения по безопасности',
    executors: employeesData,
    priority: 5,
    status: 'in-progress',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20414`,
    name: 'Проживание: новое поле для тех кто работает',
    executors: employeesData,
    priority: 4,
    status: 'done',
    isDone: true,
  },
  {
    id: `${ uuidv4() }-#20415`,
    name: 'Рейтинг мастеров в интерфейсе мереджера',
    executors: employeesData,
    priority: 2,
    status: 'done',
    isDone: true,
  },
  {
    id: `${ uuidv4() }-#20416`,
    name: 'Перенос данных в конце месяца',
    executors: employeesData,
    priority: 3,
    status: 'done',
    isDone: true,
  },
  {
    id: `${ uuidv4() }-#20417`,
    name: 'Доработки по интерфейсу «Плана»',
    executors: employeesData,
    priority: 1,
    status: 'done',
    isDone: true,
  },
  {
    id: `${ uuidv4() }-#20418`,
    name: 'Подвешенная заявка',
    executors: employeesData,
    priority: 4,
    status: 'done',
    isDone: true,
  },
  {
    id: `${ uuidv4() }-#20419`,
    name: 'Интерфейс динамики кадров на предприятии',
    executors: [employeesData[1], ...employeesData],
    priority: 5,
    status: 'done',
    isDone: true,
  },
  {
    id: `${ uuidv4() }-#20420`,
    name: 'Временной промежуток при фильтрации',
    executors: employeesData,
    priority: 2,
    status: 'delivered',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20421`,
    name: 'Статистика по источникам звонка',
    executors: [...employeesData, employeesData[0]],
    priority: 3,
    status: 'delivered',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20422`,
    name: 'Добавить график к статистике пользователей (количества регистраций)',
    executors: employeesData,
    priority: 3,
    status: 'delivered',
    isDone: false,
  },
  {
    id: `${ uuidv4() }-#20323`,
    name: 'Создать тестовую сборку сервиса ( для обработки нововведений )',
    executors: employeesData,
    priority: 4,
    status: 'delivered',
    isDone: false,
  }
];
