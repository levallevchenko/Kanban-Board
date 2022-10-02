import { useState } from "react";
// mocks
import {
  boardCardsData,
  boardColumnsData,
  boardPageData,
  getEmptyColumnData
} from "../../mocks/boardData";
// components
import BoardColumn from "../BoardColumn/BoardColumn";
import Button from "../Button/Button";
// icons
import IconWave from "../../icons/IconWave";

const Board = () => {
  const { projectTitle } = boardPageData;
  const [columns, setColumns] = useState(boardColumnsData);
  const [cards, setCards] = useState(boardCardsData);

  const handleAddColumnClick = () => {
    setColumns([...columns, getEmptyColumnData()]);
  };

  const handleDeleteColumnClick = (columnId: string) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => column.id !== columnId));
  };

  const handleDrop = (evt: React.DragEvent<HTMLElement>, columnType: string) => {
    const id = evt.dataTransfer.getData("id");

    const newCards = cards.filter((card) => {
      if (card.id === id) {
        card.status = columnType;
        card.isDone = columnType === 'done';
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
        {!columns[0] &&
          <div className="board__empty-board">
            <p>Доска пуста</p>
            <img src="./img/no-data.svg" alt="Закрытый трак" width="40%" height="40%" />
          </div>
        }
        {columns && columns.map(
          (column) => <BoardColumn
            key={column.id}
            className="board__column"
            column={column}
            columnCards={cards.filter((cardData) => cardData.status === column.key)}
            handleDelete={handleDeleteColumnClick}
            handleDrop={handleDrop}
          />
        )}
      </section>
    </>
  );
}

export default Board;
