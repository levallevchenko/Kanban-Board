import classNames from "classnames";
// @types
import { ClassNameInterface } from "../../@types/project";
import { employeesData } from "../../mocks/employeesData";
// components
import Avatar from "../Avatar/Avatar";

const Executors: ClassNameInterface = ({ className }) => {
  return (
    <ul className={classNames(className, 'executors')}>
      {employeesData.map((employee) =>
        <li className="executors__item" key={employee.id}>
          <Avatar employee={employee} />
        </li>
      )}
    </ul>
  )
}

export default Executors;
