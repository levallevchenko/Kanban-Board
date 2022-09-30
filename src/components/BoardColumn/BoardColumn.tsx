import classNames from "classnames";
// @types
import { BoardCardI, BoardColumnI } from "../../@types/board";
import { ClassNameI } from "../../@types/project";
import { boardCardsData } from "../../mocks/boardData";
import BoardCard from "../BoardCard/BoardCard";
// components
import BoardColumnEditing from "../BoardColumnEditing/BoardColumnEditing";

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
    </section>
  );
}

export default BoardColumn;
