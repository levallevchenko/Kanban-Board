import { useState } from "react";
import cn from "classnames";
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
  columnCards: BoardCardI[];
  handleDelete: (columnId: string) => void;
  handleDrop: (evt: React.DragEvent<HTMLElement>, columnType: string) => void;
}

const BoardColumn: ClassNameI<BoardColumnType> = ({
  className,
  column,
  columnCards,
  handleDelete,
  handleDrop
}) => {
  const { id, key } = column;

  const dragHandler = (evt: any, evtType: string) => {
    evtType === 'dragover' && evt.preventDefault();
    evtType === 'dragdrop' && handleDrop(evt, key);

    const target = evt.currentTarget as Element;

    if (target.tagName === 'SECTION') {
      switch (evtType) {
        case 'dragover':
        case 'dragenter':
          target.classList.add('board-column--dragenter');
          break;
        case 'dragleave':
        case 'dragdrop':
          target.classList.remove('board-column--dragenter');
          break;
      }
    }
  }

  return (
    <section
      className={cn(className, 'board-column')}
      onDragOver={(evt) => dragHandler(evt, 'dragover')}
      onDragEnter={(evt) => dragHandler(evt, 'dragenter')}
      onDragLeave={(evt) => dragHandler(evt, 'dragleave')}
      onDrop={(evt) => dragHandler(evt, 'dragdrop')}
    >
      {/* {isDragNDrop && <div style={{ width: '100%', height: '100%' }}></div>} */}
      {
        <>
          <BoardColumnEditing
            className="board-column__editing"
            column={column}
            handleDelete={() => handleDelete(id)}
          />
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
        </>
      }
    </section>
  );
}

export default BoardColumn;
