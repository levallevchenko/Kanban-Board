import classNames from "classnames";

// @types
import { ClassNameI } from "../../@types/project";
// icons
import IconMagnifier from "../../icons/IconMagnifier";
import IconButton from "../IconButton/IconButton";
import IconAdditing from "../../icons/IconAdditing";
import IconDashboard from "../../icons/IconDashboard";
import IconQuestion from "../../icons/IconQuestion";
import IconChevronRight from "../../icons/IconChevronRight";

const SidebarManageIcons: ClassNameI = ({ className }) => {
  return (
    <ul className="sidebar-manage-icons__list">
      <li className="sidebar-manage-icons__item">
        <IconButton
          icon={<IconMagnifier color="var(--color-common-white)" />}
          name="Редактировать название статуса"
          handleClick={() => { }}
        />
      </li>
      <li className="sidebar-manage-icons__item">
        <IconButton
          icon={<IconAdditing color="var(--color-common-white)" />}
          name="Удалить колонку"
          handleClick={() => { }}
        />
      </li>
      <li className="sidebar-manage-icons__item">
        <IconButton
          icon={<IconDashboard color="var(--color-common-white)" />}
          name="Удалить колонку"
          handleClick={() => { }}
        />
      </li>
      <li className="sidebar-manage-icons__item sidebar-manage-icons__item--open-button">
        <IconButton
          icon={<IconChevronRight color="var(--color-common-white)" />}
          name="Открыть боковое меню"
          handleClick={() => { }}
        />
      </li>
      <li className="sidebar-manage-icons__item">
        <IconButton
          icon={<IconQuestion color="var(--color-common-white)" />}
          name="Удалить колонку"
          handleClick={() => { }}
        />
      </li>
    </ul>
  )
}

export default SidebarManageIcons;
