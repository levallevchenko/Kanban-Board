import cn from "classnames";
// @types
import { ClassNameI } from "../../@types/project";
// components
import SidebarManageIcons from "../SidebarManageIcons/SidebarManageIcons";

const Sidebar: ClassNameI = ({ className }) => {
  return (
    <aside className={cn(className, 'sidebar')}>
      <SidebarManageIcons />
    </aside>
  );
}

export default Sidebar;
