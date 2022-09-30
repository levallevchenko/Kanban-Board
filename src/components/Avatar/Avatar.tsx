import classNames from "classnames";
import { EmployeeI } from "../../@types/employee";

// @types
import { ClassNameI } from "../../@types/project";

type AvatarProps = {
  employee: EmployeeI;
  size: {
    width: string;
    height: string;
  }
};

const Avatar: ClassNameI<AvatarProps> = ({ className, employee, size }) => {
  const { avatar } = employee;
  const { width, height } = size;

  return (
    <img
      className={classNames(className, 'avatar')}
      src={avatar}
      alt="Фото вашего профиля"
      width={width}
      height={height}
    />
  )
}

export default Avatar;
