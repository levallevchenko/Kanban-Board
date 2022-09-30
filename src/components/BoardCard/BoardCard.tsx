import classNames from "classnames";
import { BoardCardI } from "../../@types/board";
// @types
import { ClassNameI } from "../../@types/project";
// components
import Executors from "../Executors/Executors";
import Priority from "../Priority/Priority";

type BoardCardType = {
  card: BoardCardI;
};

const BoardCard: ClassNameI<BoardCardType> = ({ className, card }) => {
  const { id, name, executors } = card;

  const cardId = id.split('#')[1];

  return (
    <li className={classNames(className, 'board-card')}>
      <div className="board-card__info">
        <Executors className="board-card__executors" executors={executors} />
        <Priority className="board-card__priority" />
      </div>
      <div className="board-card__description">
        <p className="board-card__task-id">
          #{cardId}: {' '}
          <a className="board-card__task-name" href="#">
            {name}
          </a>
        </p>
      </div>
    </li>
  );
}

export default BoardCard;
