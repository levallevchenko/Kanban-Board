import classNames from "classnames";
// @types
import { BoardColumnI } from "../../@types/board";
import { ClassNameI } from "../../@types/project";
// components
import IconButton from "../IconButton/IconButton";
// icons
import IconEdit from "../../icons/IconEdit";
import IconTrash from "../../icons/IconTrash";

type BoardColumnEditingType = {
  column: BoardColumnI;
}

const BoardColumnEditing: ClassNameI<BoardColumnEditingType> = ({ className, column }) => {
  const { id, key, title, icon } = column;

  return (
    <div className={classNames(className, 'board-column-editing')}>
      <label className="board-column-editing__label" htmlFor={key}>{title}</label>
      <input className="board-column-editing__input visually-hidden" type="text" id={key} name={key} />
      <ul className="board-column-editing__button-list">
        <li className="board-column-editing__button-item">
          <IconButton
            icon={<IconEdit color="var(--color-grey-dark)" />}
            name="Редактировать название статуса"
            handleClick={() => { }}
          />
        </li>
        <li className="board-column-editing__button-item">
          <IconButton
            icon={<IconTrash color="var(--color-grey-dark)" />}
            name="Удалить колонку"
            handleClick={() => { }}
          />
        </li>
      </ul>
    </div>
  );
}

export default BoardColumnEditing;