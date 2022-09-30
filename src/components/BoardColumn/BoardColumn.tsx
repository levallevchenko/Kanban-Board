import classNames from "classnames";
// @types
import { BoardCardI, BoardColumnI } from "../../@types/board";
import { ClassNameI } from "../../@types/project";
// mocks
import { boardCardsData } from "../../mocks/boardData";
// components
import BoardColumnEditing from "../BoardColumnEditing/BoardColumnEditing";
import BoardCard from "../BoardCard/BoardCard";
import IconButton from "../IconButton/IconButton";
// icons
import IconAdditing from "../../icons/IconAdditing";

type BoardColumnType = {
  column: BoardColumnI;
}

const BoardColumn: ClassNameI<BoardColumnType> = ({ className, column }) => {
  const { key } = column;
  const columnCards = boardCardsData
    .filter((cardData) => cardData.status === key);

  return (
    <section className={classNames(className, 'board-column')}>
      <BoardColumnEditing className="board-column__editing" column={column} />
      <ul className="board-column__list">
        {columnCards.map((columnCard) =>
          <BoardCard key={columnCard.id} className="board-column__item" card={columnCard} />
        )}
      </ul>
      <IconButton
        className="board-column__add-task-button"
        icon={<IconAdditing color="var(--color-common-white)" />}
        name="Добавить новую задачу"
        handleClick={() => { }}
      />
    </section>
  );
}

export default BoardColumn;
