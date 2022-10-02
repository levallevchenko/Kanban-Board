import cn from "classnames";
import { BoardCardI } from "../../@types/board";
// @types
import { ClassNameI } from "../../@types/project";
// components
import Executors from "../Executors/Executors";
// icons
import IconPriority from "../../icons/IconPriority";

type BoardCardType = {
  card: BoardCardI;
};

const BoardCard: ClassNameI<BoardCardType> = ({ className, card }) => {
  const { id, name, executors, priority, isDone } = card;
  const cardId = id.split('#')[1];

  const handleDragStart = (evt: React.DragEvent<HTMLLIElement>, id: string) => {
    console.log('dragstart:', id);
    evt?.dataTransfer?.setData("id", id);
  };

  return (
    <li
      className={cn(className, 'board-card')}
      onDragStart={(evt) => handleDragStart(evt, id)}
      onDragEnd={() => console.log('dragend')}
      draggable="true"
    >
      <div className="board-card__info">
        <Executors className="board-card__executors" executors={executors} />
        <IconPriority className="board-card__priority" priority={priority} />
      </div>
      <div className="board-card__description">
        <p className={cn('board-card__task-id', { 'board-card__task-id--done': isDone })}>
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
