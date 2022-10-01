import { v4 as uuidv4 } from 'uuid';
// @types
import { EmployeeI } from "../@types/employee";

export const employeesData: EmployeeI[] = [
  {
    id: uuidv4(),
    name: 'Назир',
    avatar: {
      basic: './img/nazir@1x.png',
      retina: './img/nazir@2x.png',
      webp: './img/nazir@1x.webp ./img/nazir@2x.webp'
    },
    salary: 60000,
    currency: '₽'
  },
  {
    id: uuidv4(),
    name: 'Иван',
    avatar: {
      basic: './img/ivan@1x.png',
      retina: './img/ivan@2x.png',
      webp: './img/ivan@1x.webp ./img/ivan@2x.webp'
    },
    salary: 5000,
    currency: '$'
  }
];
