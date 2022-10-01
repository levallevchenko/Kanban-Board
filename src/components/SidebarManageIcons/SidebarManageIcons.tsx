import cn from 'classnames';
// @types
import { ClassNameI } from "../../@types/project";
// mocks
import { getSidebarManageIconsData } from "../../mocks/sidebarData";
// icons
import IconButton from "../IconButton/IconButton";

const SidebarManageIcons: ClassNameI = ({ className }) => {
  return (
    <ul className="sidebar-manage-icons__list">
      {getSidebarManageIconsData().map((icon) => (
        <li className={cn('sidebar-manage-icons__item', icon.classname)} >
          <IconButton
            icon={icon.component}
            name={icon.name}
            handleClick={() => { }}
          />
        </li>
      ))}
    </ul>
  )
}

export default SidebarManageIcons;
