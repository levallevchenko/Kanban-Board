import classNames from "classnames";
// @types
import { BoardColumnI } from "../../@types/board";
import { ClassNameI } from "../../@types/project";
// components
import BoardColumnDeletingButton from "../BoardColumnDeletingButton/BoardColumnDeletingButton";
import BoardColumnEditingButton from "../BoardColumnEditingButton/BoardColumnEditingButton";

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
        <li className="board-column-editing__button-item"><BoardColumnEditingButton /></li>
        <li className="board-column-editing__button-item"><BoardColumnDeletingButton /></li>
      </ul>
    </div>
  );
}

export default BoardColumnEditing;
