import classNames from "classnames";
// @types
import { ClassNameInterface } from "../../@types/project";

const Main: ClassNameInterface = ({className}) => {
	return (
		<main className={classNames(className, 'main-header')}>
		</main>
	);
}

export default Main;