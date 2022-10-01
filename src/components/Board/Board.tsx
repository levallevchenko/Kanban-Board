// mocks
import { useState } from "react";
import { boardCardsData, boardColumnsData, boardPageData } from "../../mocks/boardData";
// components
import BoardColumn from "../BoardColumn/BoardColumn";

const Board = () => {
  const [cards, setCards] = useState(boardCardsData);

  const handleDrop = (evt: React.DragEvent<HTMLElement>, columnType: string) => {
    const id = evt.dataTransfer.getData("id");

    const newCards = cards.filter((card) => {
      if (card.id === id) {
        card.status = columnType;
      }
      return card;
    });
    setCards(newCards);
  }

  return (
    <section className="board">
      {boardColumnsData.map(
        (column) => <BoardColumn
          key={column.id}
          className="board__column"
          column={column}
          columnCards={cards.filter((cardData) => cardData.status === column.key)}
          handleDrop={handleDrop}
        />
      )}
    </section>
  );
}

export default Board;
