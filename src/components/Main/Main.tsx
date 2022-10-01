import cn from "classnames";
// @types
import { ClassNameI } from "../../@types/project";
// mocks
import { boardPageData } from "../../mocks/boardData";
// components
import Board from "../Board/Board";
import BoardBreadcrumbs from "../BoardBreadcrumbs/BoardBreadcrumbs";

const Main: ClassNameI = ({ className }) => {
  const { breadcrumbs, title } = boardPageData;

  return (
    <main className={cn(className, 'main')}>
      <div className="main__page-header">
        <h1 className="main__page-title">{title}</h1>
        <BoardBreadcrumbs className="board__breadcrumbs" breadcrumbs={breadcrumbs} />
      </div>
      <Board />
    </main>
  );
}

export default Main;
