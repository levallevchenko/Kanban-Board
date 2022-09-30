import classNames from "classnames";

// @types
import { ClassNameInterface } from "../../@types/project";

const Priority: ClassNameInterface = ({ className }) => {
	return (
		<div className={classNames(className, 'priority')}></div>
	)
}

export default Priority;
