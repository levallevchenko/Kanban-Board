// mocks
import { boardPageData } from "../../mocks/boardData";
// components
import BoardBreadcrumbs from "../BoardBreadcrumbs/BoardBreadcrumbs";
import BoardCard from "../BoardCard/BoardCard";
import BoardColumnAddButton from "../BoardColumnAddButton/BoardColumnAddButton";

const Board = () => {
	const { breadcrumbs, title, projectTitle } = boardPageData;

	return (
		<section className="board">
			<BoardCard />
		</section>
	);
}

export default Board;
