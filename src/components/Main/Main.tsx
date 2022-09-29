import classNames from "classnames";
// @types
import { ClassNameInterface } from "../../@types/project";

const Main: ClassNameInterface = ({className}) => {
	return (
		<main className={classNames(className, 'main')}>
		</main>
	);
}

export default Main;