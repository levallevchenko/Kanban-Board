// components
import Button from "../Button/Button"

const BoardColumnAdditingButton = () => {
  const handleClick = () => { };

  return (
    <Button
      className="board-column__add-button"
      name="Добавить столбец"
      handleClick={handleClick}
    />
  );
}

export default BoardColumnAdditingButton;
