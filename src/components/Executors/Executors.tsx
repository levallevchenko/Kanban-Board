import classNames from "classnames";
// @types
import { ClassNameI } from "../../@types/project";
import { EmployeeI } from "../../@types/employee";
// mocks
import { avatarMediumSize } from "../../mocks/avatarData";
// utils
import { getSize } from "../../utils/common";
// components
import Avatar from "../Avatar/Avatar";

type ExecutorsType = {
  executors: EmployeeI[];
};

const Executors: ClassNameI<ExecutorsType> = ({ className, executors }) => {
  const currentAvatarSize = getSize(avatarMediumSize);
  return (
    <ul className={classNames(className, 'executors')}>
      {executors.map((employee) =>
        <li className="executors__item" key={employee.id}>
          <Avatar employee={employee} size={currentAvatarSize} />
        </li>
      )}
    </ul>
  )
}

export default Executors;
