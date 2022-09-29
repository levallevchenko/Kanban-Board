import classNames from "classnames";

// @types
import { ClassNameInterface } from "../../@types/project";

type AvatarProps = {
	src: string;
}

const Avatar: ClassNameInterface<AvatarProps> = ({ className, src }) => {
	return (
		<img className={classNames(className, 'avatar')} src={src}  alt="Фото вашего профиля"/>
	)
}

export default Avatar;