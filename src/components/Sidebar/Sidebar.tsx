import classNames from "classnames";
// @types
import { ClassNameInterface } from "../../@types/project";

const Sidebar: ClassNameInterface = ({className}) => {
	return (
		<aside className={classNames(className, 'sidebar')}>
		</aside>
	);
}

export default Sidebar;