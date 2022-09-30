import classNames from "classnames";
// @types
import { ClassNameI } from "../../@types/project";
// components
import SidebarManageIcons from "../SidebarManageIcons/SidebarManageIcons";

const Sidebar: ClassNameI = ({ className }) => {
  return (
    <aside className={classNames(className, 'sidebar')}>
      <SidebarManageIcons />
    </aside>
  );
}

export default Sidebar;
