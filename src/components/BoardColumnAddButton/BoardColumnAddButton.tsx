// components
import Button from "../Button/Button"

const BoardColumnAddButton = () => {
	const handleClick = () => {};

	return (
		<Button
			className="board-column__add-button"
			name="Добавить столбец"
			handleClick={handleClick}
		/>
	);
}

export default BoardColumnAddButton;