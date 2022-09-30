// mocks
import { boardColumnsData, boardPageData } from "../../mocks/boardData";
// components
import BoardBreadcrumbs from "../BoardBreadcrumbs/BoardBreadcrumbs";
import BoardCard from "../BoardCard/BoardCard";
import BoardColumn from "../BoardColumn/BoardColumn";

const Board = () => {
  return (
    <section className="board">
      {boardColumnsData.map(
        (column) => <BoardColumn
          key={column.id}
          className="board__column"
          column={column}
        />
      )}
    </section>
  );
}

export default Board;
