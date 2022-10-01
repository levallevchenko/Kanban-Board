import cn from "classnames";
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
				className={cn(className, 'button')}
				onClick={handleClick}
			>
				{name}
			</button>
		);
	}

export default Button;
