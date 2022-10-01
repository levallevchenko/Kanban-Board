// @types
import { sidebarManageIconsI } from "../@types/sidebar";
// icons
import IconAdditing from "../icons/IconAdditing";
import IconChevronRight from "../icons/IconChevronRight";
import IconDashboard from "../icons/IconDashboard";
import IconMagnifier from "../icons/IconMagnifier";
import IconQuestion from "../icons/IconQuestion";

export const getSidebarManageIconsData = ():
  sidebarManageIconsI[] => [
    {
      key: 'search',
      name: 'Поиск по проектам',
      component: <IconMagnifier color="var(--color-common-white)" />
    },
    {
      key: 'add-project',
      name: 'Добавить проект',
      component: <IconAdditing color="var(--color-common-white)" />
    },
    {
      key: 'dashboard',
      name: 'Открыть дашборд',
      component: <IconDashboard color="var(--color-common-white)" />
    },
    {
      key: 'open-button',
      name: 'Открыть боковое меню',
      classname: 'sidebar-manage-icons__item--open-button',
      component: <IconChevronRight color="var(--color-common-white)" />
    },
    {
      key: 'question',
      name: 'Задать вопрос',
      component: <IconQuestion color="var(--color-common-white)" />
    },
  ];
