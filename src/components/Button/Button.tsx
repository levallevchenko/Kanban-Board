import classNames from "classnames";
// @types
import { ClassNameI } from "../../@types/project";

type ButtonProps = {
	name: string;
	handleClick: () => void;
};

const Button: ClassNameI<ButtonProps> =
	(
		{ className, name, handleClick }
	) => {
		return (
			<button
				className={classNames(className, 'button')}
				onClick={handleClick}
			>
				{name}
			</button>
		);
}

export default Button;
