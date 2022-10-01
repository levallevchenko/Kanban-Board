export interface EmployeeI {
  id: string,
  name: string,
  avatar: {
    basic: string;
    retina: string;
    webp: string;
  },
  salary: number,
  currency: string
}
