import classNames from "classnames";
// @types
import { ClassNameInterface } from "../../@types/project";
// components
import Executors from "../Executors/Executors";
import Priority from "../Priority/Priority";

const BoardCard: ClassNameInterface = ({ className }) => {
	return (
		<div className={classNames(className, 'board-card')}>
			<div className="board-card__info">
				<Executors className="board-card__executors" />
				<Priority className="board-card__priority" />
			</div>
			<div className="board-card__description">
				<p className="board-card__task-id">
					#20413: {' '}
					<span className="board-card__task-name">
						Интерфейс динамики кадров на предприятии
					</span>
				</p>
			</div>
		</div>
	);
}

export default BoardCard;
