// mocks
import { useState } from "react";
import IconWave from "../../icons/IconWave";
import { boardCardsData, boardColumnsData, boardPageData, emptyColumnData } from "../../mocks/boardData";
// components
import BoardColumn from "../BoardColumn/BoardColumn";
import Button from "../Button/Button";

const Board = () => {
  const { projectTitle } = boardPageData;
  const [columns, setColumns] = useState(boardColumnsData);
  const [cards, setCards] = useState(boardCardsData);

  const handleAddColumnClick = () => {
    setColumns([...columns, emptyColumnData]);
    console.log('add-column')
  };

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
    <>
      <div className="board__header">
        <IconWave color="var(--color-grey-dark)" />
        <h2 className="board__title">{projectTitle}</h2>
        <Button
          className="board__add-column-button"
          name="Добавить столбец"
          handleClick={handleAddColumnClick}
        />
      </div>
      <section className="board__main">
        {columns.map(
          (column) => <BoardColumn
            key={column.id}
            className="board__column"
            column={column}
            columnCards={cards.filter((cardData) => cardData.status === column.key)}
            handleDrop={handleDrop}
          />
        )}
      </section>
    </>
  );
}

export default Board;
