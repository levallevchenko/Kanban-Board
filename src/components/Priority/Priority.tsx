import classNames from "classnames";

// @types
import { ClassNameI } from "../../@types/project";

const Priority: ClassNameI = ({ className }) => {
	return (
		<div className={classNames(className, 'priority')}></div>
	)
}

export default Priority;
