import { EmployeeI } from "./employee";

export interface BoardColumnI {
  id: string,
  key: string,
  title: string,
  icon: string
};

export interface BoardCardI {
  id: string,
  name: string,
  executors: EmployeeI[],
  priotity: number,
  status: string,
  isDone: boolean,
};
