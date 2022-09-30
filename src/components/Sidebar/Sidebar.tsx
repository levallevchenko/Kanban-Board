import classNames from "classnames";
// @types
import { ClassNameI } from "../../@types/project";

const Sidebar: ClassNameI = ({className}) => {
	return (
		<aside className={classNames(className, 'sidebar')}>
		</aside>
	);
}

export default Sidebar;
