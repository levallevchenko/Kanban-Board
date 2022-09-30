import classNames from "classnames";
import { Employee } from "../../@types/employee";

// @types
import { ClassNameInterface } from "../../@types/project";

type AvatarProps = {
	employee: Employee;
};

const Avatar: ClassNameInterface<AvatarProps> = ({ className, employee }) => {
	const { avatar } = employee;

	return (
		<img className={classNames(className, 'avatar')} src={avatar}  alt="Фото вашего профиля"/>
	)
}

export default Avatar;
