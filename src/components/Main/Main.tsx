import classNames from "classnames";
// @types
import { ClassNameI } from "../../@types/project";
// mocks
import { boardPageData } from "../../mocks/boardData";
// components
import Board from "../Board/Board";
import BoardBreadcrumbs from "../BoardBreadcrumbs/BoardBreadcrumbs";
import BoardColumnAddButton from "../BoardColumnAdditingButton/BoardColumnAdditingButton";

const Main: ClassNameI = ({ className }) => {
	const { breadcrumbs, title, projectTitle } = boardPageData;

	return (
		<main className={classNames(className, 'main')}>
			<div className="main__page-header">
				<h1 className="main__page-title">{title}</h1>
				<BoardBreadcrumbs className="board__breadcrumbs" breadcrumbs={breadcrumbs} />
			</div>
			<div className="main__board-header">
				<h2 className="main__board-title">{projectTitle}</h2>
				<BoardColumnAddButton />
			</div>
			<Board />
		</main>
	);
}

export default Main;
