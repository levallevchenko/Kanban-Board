import cn from "classnames";
// @types
import { BoardColumnI } from "../../@types/board";
import { ClassNameI } from "../../@types/project";
// components
import IconButton from "../IconButton/IconButton";
// icons
import IconEdit from "../../icons/IconEdit";
import IconTrash from "../../icons/IconTrash";
// utils
import { getColumnIconName } from "../../utils/board";

type BoardColumnEditingType = {
  column: BoardColumnI;
  handleDelete: () => void;
}

const BoardColumnEditing: ClassNameI<BoardColumnEditingType> = ({ className, column, handleDelete }) => {
  const { key, title } = column;

  const columnIconName = getColumnIconName(key);

  return (
    <div className={cn(className, 'board-column-editing')}>
      <div className="board-column-editing__column-title">
        <img src={`./img/${ columnIconName }.svg`} alt="" />
        <label className="board-column-editing__label" htmlFor={key}>{title}</label>
        <input className="board-column-editing__input visually-hidden" type="text" id={key} name={key} />
      </div>
      <ul className="board-column-editing__button-list">
        <li className="board-column-editing__button-item">
          <IconButton
            icon={<IconEdit color="var(--color-grey-dark)" />}
            name="Редактировать название колонки"
            handleClick={() => { }}
          />
        </li>
        <li className="board-column-editing__button-item">
          <IconButton
            icon={<IconTrash color="var(--color-grey-dark)" />}
            name="Удалить колонку"
            handleClick={handleDelete}
          />
        </li>
      </ul>
    </div>
  );
}

export default BoardColumnEditing;
