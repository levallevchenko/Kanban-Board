import { v4 as uuidv4 } from 'uuid';
// @types
import { EmployeeI } from "../@types/employee";

export const employeesData: EmployeeI[] = [
  {
    id: uuidv4(),
    name: 'Назир',
    avatar: './img/nazir.png',
    avatarRetina: './img/nazir.png',
    salary: 60000,
    currency: '₽'
  },
  {
    id: uuidv4(),
    name: 'Иван',
    avatar: './img/ivan.png',
    avatarRetina: './img/ivan.2x.png',
    salary: 5000,
    currency: '$'
  }
];
