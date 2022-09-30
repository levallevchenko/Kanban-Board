import { ReactNode } from "react";
import classNames from "classnames";
// @types
import { ClassNameI } from "../../@types/project";

type IconButtonProps = {
  name: string;
  icon: ReactNode;
  handleClick: () => void;
};

const IconButton: ClassNameI<IconButtonProps> =
  (
    { className, name, icon, handleClick }
  ) => {
    return (
      <button
        className={classNames(className, 'icon-button')}
        onClick={handleClick}
      >
        <span className="visually-hidden">{name}</span>
        {icon}
      </button>
    );
  }

export default IconButton;
